# Deployment Guide for OASIA Website

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is created by the Next.js team.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: OASIA luxury villas website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., oasia-villas.com)
   - Follow DNS configuration instructions

## Alternative Deployment Options

### Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. Add `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

### Deploy to Your Own Server

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

3. **Using PM2 (Process Manager)**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "oasia" -- start
   pm2 save
   pm2 startup
   ```

4. **Using Nginx as Reverse Proxy**:
   ```nginx
   server {
       listen 80;
       server_name oasia-villas.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Deploy with Docker

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build
   
   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   
   COPY --from=builder /app/next.config.js ./
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package.json ./package.json
   
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**:
   ```bash
   docker build -t oasia-website .
   docker run -p 3000:3000 oasia-website
   ```

## Environment Variables

If you're using any API keys or sensitive data:

1. Create `.env.local` file (never commit this)
2. Add variables to your hosting platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment variables
   - **Server**: Export in your shell or use `.env` file

## Performance Optimization

### Before Deploying:

1. **Optimize Images**: 
   - Replace Unsplash placeholder images with optimized local images
   - Use Next.js Image component for automatic optimization

2. **Enable Caching**:
   - Set up CDN caching headers
   - Enable browser caching

3. **Analyze Bundle**:
   ```bash
   npm run build
   # Check for any large dependencies
   ```

## Post-Deployment Checklist

- [ ] Test all pages and interactions
- [ ] Verify mobile responsiveness
- [ ] Check form submission
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check performance with Lighthouse
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure custom domain and SSL
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Test on multiple browsers
- [ ] Verify SEO meta tags

## Monitoring & Analytics

### Recommended Tools:

1. **Vercel Analytics** (if using Vercel)
   - Built-in Web Vitals monitoring
   - Real-time performance insights

2. **Google Analytics 4**
   - Add tracking ID to environment variables
   - Implement in `app/layout.tsx`

3. **Google Search Console**
   - Submit sitemap
   - Monitor search performance

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests get preview deployments
- Rollback to previous versions easily

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

---

**Ready to go live!** 🚀

