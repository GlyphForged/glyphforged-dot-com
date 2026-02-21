# Nginx Setup For GlyphForged Go Rewrite

This is a fresh-server guide for Ubuntu on DigitalOcean.

## 1) Provision packages

```bash
sudo apt update
sudo apt install -y nginx golang-go
```

## 2) Create app user and folders

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin glyphforged
sudo mkdir -p /opt/glyphforged-gorewrite
sudo chown -R glyphforged:glyphforged /opt/glyphforged-gorewrite
```

## 3) Copy source and build

Copy `glyphforged-gorewrite/` to `/opt/glyphforged-gorewrite`.

```bash
cd /opt/glyphforged-gorewrite
sudo -u glyphforged go build -o glyphforged-site ./cmd/site
```

## 4) Create systemd service

Create `/etc/systemd/system/glyphforged.service`:

```ini
[Unit]
Description=GlyphForged Go Web Server
After=network.target

[Service]
Type=simple
User=glyphforged
Group=glyphforged
WorkingDirectory=/opt/glyphforged-gorewrite
Environment=ADDR=:8080
ExecStart=/opt/glyphforged-gorewrite/glyphforged-site
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now glyphforged.service
sudo systemctl status glyphforged.service
```

## 5) Configure Nginx reverse proxy

Create `/etc/nginx/sites-available/glyphforged`:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    access_log /var/log/nginx/glyphforged.access.log;
    error_log  /var/log/nginx/glyphforged.error.log;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable config:

```bash
sudo ln -s /etc/nginx/sites-available/glyphforged /etc/nginx/sites-enabled/glyphforged
sudo nginx -t
sudo systemctl reload nginx
```

## 6) Optional HTTPS with Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

## 7) Firewall (if UFW enabled)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## 8) Useful ops commands

```bash
sudo journalctl -u glyphforged.service -f
sudo systemctl restart glyphforged.service
sudo nginx -t
```
