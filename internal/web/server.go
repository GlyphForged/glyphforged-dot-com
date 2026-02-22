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
	templateFuncMap := template.FuncMap{
		"safeHTML": func(s string) template.HTML {
			return template.HTML(s)
		},
		"eq":      func(a, b string) bool { return a == b },
		"nowYear": func() int { return time.Now().Year() },
	}

	workingDir, err := os.Getwd()
	if err != nil {
		return nil, fmt.Errorf("get cwd: %w", err)
	}
	rootDir, err := discoverProjectRoot(workingDir)
	if err != nil {
		return nil, err
	}

	templateGlobs := []string{
		filepath.Join(rootDir, "templates/layouts/*.gohtml"),
		filepath.Join(rootDir, "templates/partials/*.gohtml"),
		filepath.Join(rootDir, "templates/pages/*.gohtml"),
	}

	tpl, err := template.New("site").Funcs(templateFuncMap).ParseGlob(templateGlobs[0])
	if err != nil {
		return nil, fmt.Errorf("parse layouts: %w", err)
	}
	for _, globPattern := range templateGlobs[1:] {
		if _, err := tpl.ParseGlob(globPattern); err != nil {
			return nil, fmt.Errorf("parse %s: %w", globPattern, err)
		}
	}

	return &Server{
		tpl:     tpl,
		rootDir: rootDir,
	}, nil
}

func (s *Server) Routes() http.Handler {
	router := http.NewServeMux()

	staticRoot := filepath.Join(s.rootDir, "static")
	// Static assets are split between authored files (`/static`) and migrated
	// public assets (`/public`) to preserve existing URLs.
	router.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir(staticRoot))))
	router.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir(filepath.Join(staticRoot, "public")))))

	router.HandleFunc("/", s.home)
	router.HandleFunc("/games", s.gamesIndex)
	router.HandleFunc("/games/", s.gameDetail)
	router.HandleFunc("/projects", s.projectsIndex)
	router.HandleFunc("/projects/", s.projectDetail)
	router.HandleFunc("/musings", s.musings)

	router.HandleFunc("/partials/system-status", s.systemStatus)
	router.HandleFunc("/partials/demo-source", s.demoSource)

	return router
}

// render always executes the shared base layout and selects the page body via PageName.
func (s *Server) render(w http.ResponseWriter, pageTemplateName string, data viewData) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := s.tpl.ExecuteTemplate(w, "base", map[string]any{
		"Page":     data,
		"PageName": pageTemplateName,
	}); err != nil {
		http.Error(w, "template error", http.StatusInternalServerError)
	}
}

// renderPartial executes a single named template without the base layout.
func (s *Server) renderPartial(w http.ResponseWriter, partialTemplateName string, data any) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := s.tpl.ExecuteTemplate(w, partialTemplateName, data); err != nil {
		http.Error(w, "partial render error", http.StatusInternalServerError)
	}
}

// baseData centralizes shared page-level metadata used by the layout/header.
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
	pageData := baseData(r)
	pageData.PageTitle = "GlyphForged"
	pageData.Description = "Games, software, and musings"
	pageData.BodyClass = "home-page"
	s.render(w, "home", pageData)
}

func (s *Server) gamesIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/games" {
		http.NotFound(w, r)
		return
	}
	pageData := baseData(r)
	pageData.PageTitle = "Games"
	pageData.Description = "Game projects by GlyphForged"
	pageData.Games = data.Games
	s.render(w, "games", pageData)
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

	pageData := baseData(r)
	pageData.PageTitle = game.Title
	pageData.Description = game.Summary
	pageData.Game = game
	pageData.IsMobileEmbed = isMobileUA(r.UserAgent())
	s.render(w, "game-detail", pageData)
}

func (s *Server) projectsIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/projects" {
		http.NotFound(w, r)
		return
	}

	pageData := baseData(r)
	pageData.PageTitle = "Projects"
	pageData.Description = "Software and creative coding projects"
	pageData.Projects = data.Projects
	pageData.GroupOrder = []string{"noc", "shaders"}
	pageData.GroupLabels = map[string]string{"noc": "Nature of Code", "shaders": "Shaders"}
	pageData.Grouped = map[string][]data.Project{"noc": {}, "shaders": {}}
	for _, project := range data.Projects {
		pageData.Grouped[project.Category] = append(pageData.Grouped[project.Category], project)
	}
	s.render(w, "projects", pageData)
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

	pageData := baseData(r)
	pageData.PageTitle = project.Title
	pageData.Description = project.Summary
	pageData.Project = project
	s.render(w, "project-detail", pageData)
}

func (s *Server) musings(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/musings" {
		http.NotFound(w, r)
		return
	}
	pageData := baseData(r)
	pageData.PageTitle = "Musings"
	pageData.Description = "Work in progress"
	pageData.BodyClass = "musings-page"
	s.render(w, "musings", pageData)
}

func (s *Server) systemStatus(w http.ResponseWriter, r *http.Request) {
	// This endpoint intentionally returns lightweight synthetic status text to
	// make the terminal rail feel "live" without backend dependencies.
	statusMoods := []string{
		"forging glyphs",
		"calibrating retroencabulator",
		"stabilizing runes",
		"reticulating splines",
		"prefamulating amulite",
		"centering div",
		"transmuting data",
		"chanting binharic hymn",
		"appeasing the machine spirit"}
	syntheticLoadPercent := rand.Intn(32) + 42
	statusPayload := map[string]string{
		"Time": time.Now().UTC().Format("2006-01-02 15:04:05 UTC"),
		"Load": fmt.Sprintf("%d%%", syntheticLoadPercent),
		"Mood": statusMoods[rand.Intn(len(statusMoods))],
	}
	s.renderPartial(w, "status-line", statusPayload)
}

func (s *Server) demoSource(w http.ResponseWriter, r *http.Request) {
	projectSlug := r.URL.Query().Get("project")
	demoID := r.URL.Query().Get("demo")
	project := data.GetProjectBySlug(projectSlug)
	demo := data.GetDemoByID(project, demoID)
	if project == nil || demo == nil {
		http.Error(w, "demo not found", http.StatusNotFound)
		return
	}

	// HTMX sends `state=show|hide`; default is hidden when absent/unknown.
	desiredState := r.URL.Query().Get("state")
	shouldShowSource := desiredState == "show"
	s.renderPartial(w, "demo-source-toggle", map[string]any{
		"Project": project,
		"Demo":    demo,
		"Show":    shouldShowSource,
	})
}

// isMobileUA provides a coarse signal for pages where desktop embeds can be
// problematic on phones/tablets.
func isMobileUA(userAgent string) bool {
	if userAgent == "" {
		return false
	}
	userAgent = strings.ToLower(userAgent)
	mobileMarkers := []string{"mobi", "android", "iphone", "ipad", "ipod", "windows phone", "webos"}
	for _, marker := range mobileMarkers {
		if strings.Contains(userAgent, marker) {
			return true
		}
	}
	return false
}

// discoverProjectRoot walks upward from the current working directory until it
// finds both templates and static assets.
func discoverProjectRoot(start string) (string, error) {
	// Search up from current working directory so `go run .` works from repo
	// root and from `cmd/site`.
	currentDir := filepath.Clean(start)
	for depth := 0; depth < 8; depth++ {
		layoutsGlob := filepath.Join(currentDir, "templates/layouts/*.gohtml")
		staticDir := filepath.Join(currentDir, "static")
		layoutMatches, _ := filepath.Glob(layoutsGlob)
		if len(layoutMatches) > 0 {
			if staticInfo, err := os.Stat(staticDir); err == nil && staticInfo.IsDir() {
				return currentDir, nil
			}
		}

		parentDir := filepath.Dir(currentDir)
		if parentDir == currentDir {
			break
		}
		currentDir = parentDir
	}

	return "", fmt.Errorf("project root not found from %q: expected templates/ and static/", start)
}
