package web

import (
	"fmt"
	"html/template"
	"math/rand"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"glyphforged-gorewrite/internal/data"
)

type navItem struct {
	Label string
	Href  string
}

type viewData struct {
	Title       string
	PageTitle   string
	CurrentPath string
	Description string
	NavItems    []navItem
	BodyClass   string

	Games         []data.Game
	Game          *data.Game
	Projects      []data.Project
	Project       *data.Project
	Grouped       map[string][]data.Project
	GroupOrder    []string
	GroupLabels   map[string]string
	IsMobileEmbed bool
	Demo          *data.WasmDemo
}

type Server struct {
	tpl     *template.Template
	rootDir string
}

func NewServer() (*Server, error) {
	funcMap := template.FuncMap{
		"safeHTML": func(s string) template.HTML {
			return template.HTML(s)
		},
		"eq":      func(a, b string) bool { return a == b },
		"nowYear": func() int { return time.Now().Year() },
	}

	cwd, err := os.Getwd()
	if err != nil {
		return nil, fmt.Errorf("get cwd: %w", err)
	}
	rootDir, err := discoverProjectRoot(cwd)
	if err != nil {
		return nil, err
	}

	patterns := []string{
		filepath.Join(rootDir, "templates/layouts/*.gohtml"),
		filepath.Join(rootDir, "templates/partials/*.gohtml"),
		filepath.Join(rootDir, "templates/pages/*.gohtml"),
	}

	tpl, err := template.New("site").Funcs(funcMap).ParseGlob(patterns[0])
	if err != nil {
		return nil, fmt.Errorf("parse layouts: %w", err)
	}
	for _, p := range patterns[1:] {
		if _, err := tpl.ParseGlob(p); err != nil {
			return nil, fmt.Errorf("parse %s: %w", p, err)
		}
	}

	return &Server{
		tpl:     tpl,
		rootDir: rootDir,
	}, nil
}

func (s *Server) Routes() http.Handler {
	mux := http.NewServeMux()

	staticRoot := filepath.Join(s.rootDir, "static")
	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir(staticRoot))))
	mux.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir(filepath.Join(staticRoot, "public")))))

	mux.HandleFunc("/", s.home)
	mux.HandleFunc("/games", s.gamesIndex)
	mux.HandleFunc("/games/", s.gameDetail)
	mux.HandleFunc("/projects", s.projectsIndex)
	mux.HandleFunc("/projects/", s.projectDetail)
	mux.HandleFunc("/musings", s.musings)

	mux.HandleFunc("/partials/system-status", s.systemStatus)
	mux.HandleFunc("/partials/demo-source", s.demoSource)

	return mux
}

func (s *Server) render(w http.ResponseWriter, name string, data viewData) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := s.tpl.ExecuteTemplate(w, "base", map[string]any{
		"Page":     data,
		"PageName": name,
	}); err != nil {
		http.Error(w, "template error", http.StatusInternalServerError)
	}
}

func (s *Server) renderPartial(w http.ResponseWriter, name string, data any) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := s.tpl.ExecuteTemplate(w, name, data); err != nil {
		http.Error(w, "partial render error", http.StatusInternalServerError)
	}
}

func baseData(r *http.Request) viewData {
	return viewData{
		Title:       "GlyphForged.com",
		CurrentPath: r.URL.Path,
		NavItems: []navItem{
			{Label: "Home", Href: "/"},
			{Label: "Games", Href: "/games"},
			{Label: "Projects", Href: "/projects"},
			{Label: "Musings", Href: "/musings"},
		},
	}
}

func (s *Server) home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	vd := baseData(r)
	vd.PageTitle = "GlyphForged"
	vd.Description = "Games, software, and musings"
	vd.BodyClass = "home-page"
	s.render(w, "home", vd)
}

func (s *Server) gamesIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/games" {
		http.NotFound(w, r)
		return
	}
	vd := baseData(r)
	vd.PageTitle = "Games"
	vd.Description = "Game projects by GlyphForged"
	vd.Games = data.Games
	s.render(w, "games", vd)
}

func (s *Server) gameDetail(w http.ResponseWriter, r *http.Request) {
	slug := strings.TrimPrefix(r.URL.Path, "/games/")
	if slug == "" || strings.Contains(slug, "/") {
		http.NotFound(w, r)
		return
	}

	game := data.GetGameBySlug(slug)
	if game == nil {
		http.NotFound(w, r)
		return
	}

	vd := baseData(r)
	vd.PageTitle = game.Title
	vd.Description = game.Summary
	vd.Game = game
	vd.IsMobileEmbed = isMobileUA(r.UserAgent())
	s.render(w, "game-detail", vd)
}

func (s *Server) projectsIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/projects" {
		http.NotFound(w, r)
		return
	}

	vd := baseData(r)
	vd.PageTitle = "Projects"
	vd.Description = "Software and creative coding projects"
	vd.Projects = data.Projects
	vd.GroupOrder = []string{"noc", "shaders"}
	vd.GroupLabels = map[string]string{"noc": "Nature of Code", "shaders": "Shaders"}
	vd.Grouped = map[string][]data.Project{"noc": {}, "shaders": {}}
	for _, p := range data.Projects {
		vd.Grouped[p.Category] = append(vd.Grouped[p.Category], p)
	}
	s.render(w, "projects", vd)
}

func (s *Server) projectDetail(w http.ResponseWriter, r *http.Request) {
	slug := strings.TrimPrefix(r.URL.Path, "/projects/")
	if slug == "" || strings.Contains(slug, "/") {
		http.NotFound(w, r)
		return
	}

	project := data.GetProjectBySlug(slug)
	if project == nil {
		http.NotFound(w, r)
		return
	}

	vd := baseData(r)
	vd.PageTitle = project.Title
	vd.Description = project.Summary
	vd.Project = project
	s.render(w, "project-detail", vd)
}

func (s *Server) musings(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/musings" {
		http.NotFound(w, r)
		return
	}
	vd := baseData(r)
	vd.PageTitle = "Musings"
	vd.Description = "Work in progress"
	vd.BodyClass = "musings-page"
	s.render(w, "musings", vd)
}

func (s *Server) systemStatus(w http.ResponseWriter, r *http.Request) {
	load := rand.Intn(32) + 42
	moods := []string{"forging UI", "compiling vibes", "stabilizing runes", "profiling goblins"}
	payload := map[string]string{
		"Time": time.Now().UTC().Format("2006-01-02 15:04:05 UTC"),
		"Load": fmt.Sprintf("%d%%", load),
		"Mood": moods[rand.Intn(len(moods))],
	}
	s.renderPartial(w, "status-line", payload)
}

func (s *Server) demoSource(w http.ResponseWriter, r *http.Request) {
	project := data.GetProjectBySlug(r.URL.Query().Get("project"))
	demo := data.GetDemoByID(project, r.URL.Query().Get("demo"))
	if project == nil || demo == nil {
		http.Error(w, "demo not found", http.StatusNotFound)
		return
	}

	state := r.URL.Query().Get("state")
	show := state == "show"
	s.renderPartial(w, "demo-source-toggle", map[string]any{
		"Project": project,
		"Demo":    demo,
		"Show":    show,
	})
}

func isMobileUA(ua string) bool {
	if ua == "" {
		return false
	}
	ua = strings.ToLower(ua)
	needles := []string{"mobi", "android", "iphone", "ipad", "ipod", "windows phone", "webos"}
	for _, n := range needles {
		if strings.Contains(ua, n) {
			return true
		}
	}
	return false
}

func discoverProjectRoot(start string) (string, error) {
	// Search up from current working directory so `go run .` works from repo root
	// and from `cmd/site`.
	cur := filepath.Clean(start)
	for i := 0; i < 8; i++ {
		layoutsGlob := filepath.Join(cur, "templates/layouts/*.gohtml")
		staticDir := filepath.Join(cur, "static")
		layoutMatches, _ := filepath.Glob(layoutsGlob)
		if len(layoutMatches) > 0 {
			if fi, err := os.Stat(staticDir); err == nil && fi.IsDir() {
				return cur, nil
			}
		}

		parent := filepath.Dir(cur)
		if parent == cur {
			break
		}
		cur = parent
	}

	return "", fmt.Errorf("project root not found from %q: expected templates/ and static/", start)
}
