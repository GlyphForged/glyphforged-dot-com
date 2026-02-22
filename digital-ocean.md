# Deploy GlyphForged On A Fresh DigitalOcean Droplet

This guide assumes:

- Ubuntu 24.04 LTS droplet
- Domain managed in DigitalOcean DNS (or equivalent DNS provider)
- Repository: `glyphforged-dot-com`
- App listens on `127.0.0.1:8080` behind Nginx

## 1. Create Droplet

1. In DigitalOcean, create a droplet:
   - Region near your users
   - Ubuntu 24.04 LTS
   - Basic plan is sufficient for this site
   - Add SSH key during creation
2. Point DNS:
   - `A` record for `glyphforged.com` -> droplet IPv4
   - `A` record for `www.glyphforged.com` -> droplet IPv4
3. SSH in as root:

```bash
ssh root@YOUR_DROPLET_IP
```

## 2. Base OS Setup

```bash
apt update && apt upgrade -y
apt install -y git nginx ufw certbot python3-certbot-nginx
```

Create a non-root sudo user:

```bash
adduser deploy
usermod -aG sudo deploy
```

Optional: copy authorized keys from root:

```bash
rsync --archive --chown=deploy:deploy ~/.ssh /home/deploy
```

Enable firewall:

```bash
ufw allow OpenSSH
ufw allow "Nginx Full"
ufw --force enable
ufw status
```

## 3. Install Go

Ubuntu repo Go versions can lag. Install a current stable tarball from go.dev.

```bash
cd /tmp
curl -LO https://go.dev/dl/go1.25.0.linux-amd64.tar.gz
rm -rf /usr/local/go
tar -C /usr/local -xzf go1.25.0.linux-amd64.tar.gz
```

Add Go to all users:

```bash
cat <<'EOF' >/etc/profile.d/go.sh
export PATH=$PATH:/usr/local/go/bin
EOF
chmod 644 /etc/profile.d/go.sh
```

Reload shell (or log out/in), then verify:

```bash
source /etc/profile
go version
```

## 4. Create App User And Directory

Create a locked-down service account for runtime:

```bash
useradd --system --create-home --shell /usr/sbin/nologin glyphforged
mkdir -p /opt/glyphforged-dot-com
chown -R deploy:deploy /opt/glyphforged-dot-com
```

## 5. Pull Source And Build

Switch to deploy user:

```bash
su - deploy
cd /opt/glyphforged-dot-com
git clone https://github.com/GlyphForged/glyphforged-dot-com.git .
```

Build:

```bash
cd /opt/glyphforged-dot-com
/usr/local/go/bin/go build -o glyphforged-site ./cmd/site
```

Quick local verification:

```bash
ADDR=:8080 ./glyphforged-site &
sleep 1
curl -I http://127.0.0.1:8080
pkill -f glyphforged-site
```

Exit back to root:

```bash
exit
```

Grant runtime ownership to service user:

```bash
chown -R glyphforged:glyphforged /opt/glyphforged-dot-com
```

## 6. Configure systemd Service

Create `/etc/systemd/system/glyphforged.service`:

```ini
[Unit]
Description=GlyphForged Go Web Server
After=network.target

[Service]
Type=simple
User=glyphforged
Group=glyphforged
WorkingDirectory=/opt/glyphforged-dot-com
Environment=ADDR=:8080
ExecStart=/opt/glyphforged-dot-com/glyphforged-site
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
systemctl daemon-reload
systemctl enable --now glyphforged.service
systemctl status glyphforged.service
```

Live logs:

```bash
journalctl -u glyphforged.service -f
```

## 7. Configure Nginx Reverse Proxy

Create `/etc/nginx/sites-available/glyphforged`:

```nginx
server {
    listen 80;
    server_name glyphforged.com www.glyphforged.com;

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

Enable site:

```bash
ln -sf /etc/nginx/sites-available/glyphforged /etc/nginx/sites-enabled/glyphforged
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

## 8. Enable HTTPS (Let's Encrypt)

```bash
certbot --nginx -d glyphforged.com -d www.glyphforged.com
```

Confirm auto-renew:

```bash
systemctl status certbot.timer
```

Dry run renew test:

```bash
certbot renew --dry-run
```

## 9. Post-Deploy Validation

Check:

```bash
curl -I https://glyphforged.com
curl -I https://www.glyphforged.com
systemctl status glyphforged.service
systemctl status nginx
```

Verify in browser:

- Home, Games, Projects, Musings pages
- At least one `/projects/{slug}` detail page and embedded demo
- No mixed-content warnings

## 10. Update Workflow

When you push new code:

```bash
sudo -u deploy -H bash -lc '
  cd /opt/glyphforged-dot-com &&
  git pull --ff-only &&
  /usr/local/go/bin/go build -o glyphforged-site ./cmd/site
'
systemctl restart glyphforged.service
systemctl status glyphforged.service
```

## 11. Rollback (Quick)

If latest deploy is bad:

```bash
sudo -u deploy -H bash -lc '
  cd /opt/glyphforged-dot-com &&
  git log --oneline -n 5
  # choose prior commit:
  git checkout <GOOD_COMMIT_SHA> &&
  /usr/local/go/bin/go build -o glyphforged-site ./cmd/site
'
systemctl restart glyphforged.service
```

Then fix forward in Git and return repo to branch tip when ready.
