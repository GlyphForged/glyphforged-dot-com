# GlyphForged.com

Go + HTMX source for `glyphforged.com`.

This rewrite keeps the existing site structure and content while simplifying deployment to a small Linux VM (for example, a DigitalOcean droplet) without a Node runtime.

## Goals

- Preserve the main URL structure:
  - `/`
  - `/games`
  - `/games/{slug}`
  - `/projects`
  - `/projects/{slug}`
  - `/musings`
- Keep existing project/game content and static assets.
- Use a lightweight stack: Go server-side rendering + HTMX partial updates.

## Tech Stack

- Go `net/http`
- `html/template`
- HTMX
- Vanilla CSS and minimal JavaScript
- Nginx reverse proxy (production)

## Project Layout

- `cmd/site/main.go`: app entrypoint and listener startup
- `internal/web/server.go`: routes, handlers, template rendering, partial endpoints
- `internal/data/models.go`: game/project/demo data
- `templates/layouts`: base layout
- `templates/pages`: page templates by route
- `templates/partials`: shared UI fragments and HTMX partial templates
- `static/css/app.css`: site styles
- `static/js/app.js`: small client behavior for HTMX swap effects
- `static/public`: static media and embedded demo artifacts

## Dynamic HTMX Endpoints

- `/partials/system-status`
  - Updates on page load and every 7 seconds with synthetic status output.
- `/partials/demo-source?project={slug}&demo={id}&state=show|hide`
  - Toggles source-code iframe blocks for project demos.

## Local Development

```bash
go run ./cmd/site
```

Default bind address is `:8080`.

Set a custom address:

```bash
ADDR=:9090 go run ./cmd/site
```

## Build

```bash
go build ./...
```

## Deployment

- Start-to-finish droplet guide: `digital-ocean.md`
- Nginx-focused quick reference: `nginx.md`

## Notes

- `/musings` intentionally renders as a work-in-progress page.
- Current design language uses an alexandrite/terminal aesthetic.
