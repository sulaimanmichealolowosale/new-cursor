# 🚀 Deployment Guide - INVENTIO Inc Website

## Option 1: Deploy to Vercel (RECOMMENDED ⭐)

Vercel is made by the creators of Next.js. Best performance, free tier.

### Steps:

1. **Push to GitHub**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/inventio-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Create Vercel Account**
   - Go to https://vercel.com
   - Click "Sign Up" → "Continue with GitHub"
   - Authorize Vercel to access your GitHub

3. **Deploy Project**
   - Click "New Project"
   - Select your `inventio-website` repository
   - Click "Import"
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

4. **Done!**
   - Your site is live at `your-project.vercel.app`
   - Automatic deployments on every git push to main

---

## Option 2: Deploy to Netlify

### Steps:

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub

2. **Connect Repository**
   - Click "New site from Git"
   - Choose GitHub
   - Select `inventio-website` repo

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

---

## Option 3: Deploy to Railway

### Steps:

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Select Node.js environment
   - Railway auto-detects Next.js
   - Click "Deploy"

---

## Custom Domain (All Platforms)

### Add your own domain (e.g., inventio.com):

**For Vercel:**

1. Settings → Domains
2. Add custom domain
3. Update DNS records with your registrar (GoDaddy, Namecheap, etc.)

**For Netlify:**

1. Domain settings → Add custom domain
2. Follow DNS setup instructions

**For Railway:**

1. Settings → Custom Domain
2. Update DNS records

---

## Environment Variables (if needed later)

Create `.env.production` for sensitive data:

```
NEXT_PUBLIC_API_URL=https://your-api.com
```

Add in Vercel/Netlify dashboard:

- Settings → Environment Variables
- Add key-value pairs

---

## Recommended: Use Vercel

✅ **Best for Next.js**
✅ **Fastest deployment**
✅ **Free tier covers most needs**
✅ **Automatic HTTPS & CDN**
✅ **One-click rollbacks**
✅ **Analytics included**

---

## Next Steps After Deployment

1. Test all pages load correctly
2. Check animations work smoothly
3. Test dark/light theme toggle
4. Verify navigation links work
5. Test contact form (if connected to backend)
6. Check mobile responsiveness
7. Run lighthouse audit for performance

---

**Need Help?**

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Railway Docs: https://docs.railway.app
