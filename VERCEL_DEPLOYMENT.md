# Vercel Deployment Guide for Vision School Website

This repository is configured for **Vercel deployment** with automatic build settings and client routing.

---

## Configuration Files Added

1. **[`vercel.json`](file:///c:/Users/quazi%20taha/Documents/vision-school-website/vercel.json)**:
   - Sets framework to `vite`.
   - Build Command: `npm run build`
   - Output Directory: `.output/public`
   - Enables clean URLs & client-side route rewrites.

2. **[`.vercelignore`](file:///c:/Users/quazi%20taha/Documents/vision-school-website/.vercelignore)**:
   - Excludes `.git`, `node_modules`, log files, and build caches to ensure fast deployment uploads.

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

1. Push the latest code to GitHub:
   ```bash
   git add .
   git commit -m "Add Vercel configuration files"
   git push origin main
   ```

2. Open **[vercel.com/new](https://vercel.com/new)**.
3. Click **Import** next to your GitHub repository: **`Quazitahaumair/Vision-School`**.
4. Vercel will automatically read `vercel.json` and populate all build settings.
5. Click **Deploy**.

---

## Method 2: Deploy via Vercel CLI

If you prefer using the command line:

```bash
# 1. Log in to Vercel
cmd /c npx vercel login

# 2. Deploy to Preview
cmd /c npx vercel

# 3. Deploy to Production
cmd /c npx vercel --prod
```

---

## Verification & Build Command
To test local production builds prior to deploying:

```bash
npm run build
```

This generates production-ready bundle output inside `.output/public`.
