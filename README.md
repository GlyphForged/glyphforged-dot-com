# GlyphForged.com

This is the source code for my portfolio page, hosted at glyphforged.com. In the interest of both reminding myself how my code works, and allowing this site to serve as a portfolio project in and of itself, I have made this repo publicly available for review. I am not responsible for whatever madness you might succumb to should you choose to dig through this.

## Build notes

Pull down trunk to `/var/www/glyphforged`

Clean up the install, build, and run.

```
npm ci
npm run build
```

Test with `npm start` to ensure prod works, then restart pm2 process.

```
pm2 restart glyphforged
```

## Standardization

In the effort of keepint a cohesive feel, keeping standardization iformation here.

### Colors

Dark Background: #29313d

Light background: #9caec9

Purple: #480a5c

Pink: #a50d66

Light Gray: #cccccc

Dark Gray: #333333
