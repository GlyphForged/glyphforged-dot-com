# GlyphForged Go Rewrite

A Go + HTMX rewrite of the original Node/Next GlyphForged site, built as a droplet-friendly placeholder deployment.

## Goals of this rewrite

- Preserve the original information architecture and URLs:
  - `/`
  - `/games`
  - `/games/{slug}`
  - `/projects`
  - `/projects/{slug}`
  - `/musings`
- Reuse original static assets and project/game content.
- Use a simpler runtime stack for Ubuntu/DigitalOcean deployment.
- Apply a stronger alexandrite + TUI design language (teal/purple terminal styling).
- Implement dynamic interactions with HTMX instead of a heavy client framework.

## Tech stack

- Go `net/http` server
- `html/template` for rendering
- HTMX for dynamic partial updates
- Vanilla CSS + a small JS enhancer
- Nginx reverse proxy (see `nginx.md`)

## Project structure

- `cmd/site/main.go`: entrypoint and server boot
- `internal/web/server.go`: routes, handlers, template rendering, HTMX partial handlers
- `internal/data/models.go`: ported data from the original source (games/projects/demos)
- `templates/layouts`: site shell
- `templates/pages`: per-route templates
- `templates/partials`: shared components + HTMX partial responses
- `static/css/app.css`: alexandrite/TUI design system and page styling
- `static/js/app.js`: tiny client enhancer for HTMX swap feedback
- `static/public`: copied original assets (`public/` from old project)

## Dynamic HTMX sections

- **System status rail**
  - Endpoint: `/partials/system-status`
  - Behavior: updates every 7s with UTC time, pseudo load, and forge state.
- **Project source toggles**
  - Endpoint: `/partials/demo-source?project={slug}&demo={id}&state=show|hide`
  - Behavior: lazily loads/removes source-code iframe blocks for each demo.

## Musings WIP behavior

`/musings` intentionally renders a "Work in progress" page with a looping, TUI-inspired **Loading Insanity** bar animation.

## Local run

```bash
cd glyphforged-gorewrite
go run ./cmd/site
```

Then open `http://localhost:8080`.

Set a custom bind address if needed:

```bash
ADDR=":9090" go run ./cmd/site
```

## Build check

```bash
go build ./...
```

## Design notes

- Used screenshot references to preserve hierarchy and content while intentionally increasing terminal-like presentation.
- Consolidated header/footer into reusable template partials.
- Kept original game/project detail semantics, including mobile embed fallback for game pages.
- Added comments around less-obvious logic (HTMX update behavior and mobile UA handling).

## Deployment

See `nginx.md` for a fresh Ubuntu droplet setup using systemd + Nginx reverse proxy.
