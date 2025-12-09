# GlyphForged.com

This is the source code for my portfolio page, hosted at glyphforged.com. In the interest of both reminding myself how my code works, and allowing this site to serve as a portfolio project in and of itself, I have made this repo publicly available for review. I am not responsible for whatever madness you might succumb to should you choose to dig through this.

## Build notes

Stop 'glyphforged' process in PM2: `pm2 stop glyphforged`

Pull down trunk to `/var/www/glyphforged`

Clean up the install, build, and run.

```
npm ci
npm run build
```

Optionally test with `npm start` to ensure prod works, then restart pm2 process: `pm2 start glyphforged`

### Clean Build

After the 2025 React2Shell CVE, a completely clean build was required. In case this is needed again, the steps have been documented below in case I forget again and need to stumble through setting up a clean droplet:

After installing prerequisite software (npm, build-essential, nginx, ufw, git, nvim, etc..):

* Config Firewall:
  * Command:

    ```bash
    ufw allow OpenSSH
    ufw allow "Nginx Full"
    ufw enable
    ```

* Install Node.js and PM2
  * Check nodejs.org for the current version and install via their script.
  * Command:

    ```bash
    npm install -g pm2
    ```

* Clone the repo to /var/www/glyphforged
* Install dependencies and build:
  * Command:

    ```bash
    npm ci
    npm run build
    # Sanity check
    npm start 
    # From a tmux/2nd shell
    curl -I http://localhost:3000
    # Assuming we get a 200, we're good to set up PM2
    ```

* Set up PM2
  * From /var/www/glyphforged:

    ```bash
    pm2 start npm --name glyphforged -- run start
    pm2 save
    pm2 startup systemd
    # The following commands can be used to check the process:
    pm2 status
    pm2 logs glyphforged
    ```

* Configure nginx as a reverse proxy
  * `sudo vim /etc/nginx/sites-available/glyphforged`

    ```nginx
    server {
        listen 80;
        server_name glyphforged.com www.glyphforged.com;

        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;

            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;

            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

  * Enable it and disable the default site:

    ```bash
    ln -s /etc/nginx/sites-available/glyphforged /etc/nginx/sites-enabled/glyphforged
    rm /etc/nginx/sites-enabled/default
    nginx -t
    systemctl reload nginx
    ```

* Add HTTPS with Let's Encrypt
  * Install certbot: `sudo apt install -y certbot python3-certbot-nginx`
  * Run certbot: `certbot --nginx -d glyphforged.com -d www.glyphforged.com`
  * Double check renewal timer: `systemctl status certbot.timer`

Once these steps are complete, the site should be back up and running.

## Standardization

In the effort of keeping a cohesive feel, keeping standardization information here.

### Colors

Dark Background: #29313d

Dark Gray: #333333

Light background: #9caec9

Light Gray: #cccccc

Purple: #a117cf

Pink: #ee2b9d

Blue: #3d6bf5

## ToDos

* Musings Section
* Visual upgrades
