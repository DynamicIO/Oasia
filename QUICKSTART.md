# 🚀 OASIA - Quick Start Guide

## Get Running in 3 Minutes

### Step 1: Install Dependencies (2 min)
```bash
npm install
```

### Step 2: Start Development Server (30 sec)
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to **http://localhost:3000** 🎉

---

## ✨ What You've Got

### 🎨 **Beautiful Components**
- **Hero** - Full-screen with parallax effect
- **About** - Brand story with feature cards
- **Philosophy** - Inspirational section with fixed background
- **Features** - Comprehensive amenities grid
- **Gallery** - Interactive image showcase with lightbox
- **Contact** - Functional form with validation
- **Footer** - Complete with social links

### 🛠️ **Modern Tech Stack**
- ⚡ **Next.js 14** - Latest React framework
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first styling
- ✨ **Framer Motion** - Smooth animations
- 📱 **Fully Responsive** - Mobile, tablet, desktop
- 🔍 **SEO Optimized** - Meta tags and semantic HTML

### 🎯 **Design Features**
- Nature-inspired color palette (Sand, Earth, Sage)
- Smooth scroll animations
- Interactive hover effects
- Mobile-friendly navigation
- Custom scrollbar
- Professional typography

---

## 📋 Quick Reference

### Common Tasks

**Change Colors**:
```javascript
// Edit tailwind.config.js
colors: {
  sage: { 600: '#YOUR_COLOR' }
}
```

**Update Hero Text**:
```tsx
// Edit components/Hero.tsx
<h1>YOUR TEXT</h1>
```

**Replace Images**:
```tsx
// Add images to public/images/
// Update src="/images/your-image.jpg"
```

**Add Contact Info**:
```tsx
// Edit components/Contact.tsx & Footer.tsx
{ content: 'Your Info' }
```

---

## 📦 What's Included

```
📁 oaisa-villas/
├── 📱 app/                 # Next.js app directory
├── 🧩 components/          # React components
├── 🎨 public/              # Static assets
├── ⚙️ Configuration files  # Tailwind, TypeScript, etc.
├── 📖 README.md            # Full documentation
├── 🎨 CUSTOMIZATION.md     # How to customize
├── 🚀 DEPLOYMENT.md        # Deployment guide
└── 📋 SETUP.md             # Detailed setup
```

---

## 🎯 Next Actions

### 1️⃣ **Customize Content** (30 min)
- [ ] Update brand name and tagline
- [ ] Change contact information
- [ ] Modify features and amenities
- [ ] Add your own images

### 2️⃣ **Adjust Design** (15 min)
- [ ] Customize colors to match brand
- [ ] Upload logo
- [ ] Select custom fonts

### 3️⃣ **Test Everything** (20 min)
- [ ] Check on mobile device
- [ ] Test all navigation links
- [ ] Verify contact form
- [ ] Test gallery lightbox

### 4️⃣ **Deploy** (10 min)
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Add analytics

---

## 💡 Pro Tips

### Performance
- Keep images under 500KB
- Use WebP format for images
- Test with Lighthouse (F12 → Lighthouse)

### Development
- Save files auto-refreshes browser
- Check terminal for errors
- Use TypeScript hints in VS Code

### Customization
- Start with colors and images
- Then customize content
- Finally adjust animations
- See `CUSTOMIZATION.md` for details

---

## 📚 Documentation

| Guide | Purpose |
|-------|---------|
| **README.md** | Complete overview and features |
| **SETUP.md** | Detailed installation guide |
| **CUSTOMIZATION.md** | How to customize everything |
| **DEPLOYMENT.md** | Deploy to production |

---

## 🆘 Need Help?

### Check These First:
1. Is Node.js 18+ installed? `node --version`
2. Did `npm install` complete successfully?
3. Is port 3000 available?
4. Check terminal for error messages

### Common Issues:

**Port in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies issue?**
```bash
rm -rf node_modules
npm install
```

**TypeScript errors?**
- Restart VS Code
- Run `npm run build` to see all errors

---

## 🎉 You're All Set!

Your OASIA luxury villas website is ready to go!

**Current Status:**
✅ Modern Next.js setup
✅ Beautiful responsive design  
✅ Smooth animations
✅ SEO optimized
✅ Production ready

**What's Running:**
- Development server: http://localhost:3000
- Hot reload enabled
- TypeScript checking active

---

## 🚀 Deploy in 5 Minutes

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Deploy to Vercel
# → Go to vercel.com
# → Import repository
# → Click Deploy
# → Done! 🎉
```

---

**Happy Building!** ✨🏡

For questions: See full documentation in README.md

