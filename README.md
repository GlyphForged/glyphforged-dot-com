# GlyphForged.com

This is the source code for my portfolio page, hosted at glyphforged.com. In the interest of both reminding myself how my code works, and allowing this site to serve as a portfolio project in and of itself, I have made this repo publicly available for review. I am not responsible for whatever madness you might succumb to should you choose to dig through this.

## Build notes
For each build, these steps should be followed.

Pull down trunk from `/var/www/glyphforged`

Clean up the install, build, and run.
```
npm ci
npm run build
npm start
```


## Standardization

### Colors
Dark Background: #29313d
Light background: #9caec9
Purple: #480a5c
Light Gray: #cccccc
Dark Gray: #333333

## Next.js specific notes

bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

First, run the development server:

```bash
npm run dev
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
