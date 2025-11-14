# OASIA Website - Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor (VS Code recommended)

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd oasia-villas
```

### 2. Install Dependencies

Choose one of the following package managers:

**Using npm**:
```bash
npm install
```

**Using yarn**:
```bash
yarn install
```

**Using pnpm**:
```bash
pnpm install
```

This will install all required dependencies:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- And more...

### 3. Run Development Server

**Using npm**:
```bash
npm run dev
```

**Using yarn**:
```bash
yarn dev
```

**Using pnpm**:
```bash
pnpm dev
```

### 4. Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the OASIA website running locally! 🎉

## Project Structure

```
oasia-villas/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main home page
├── components/
│   ├── Header.tsx           # Navigation with mobile menu
│   ├── Hero.tsx             # Hero section with parallax
│   ├── About.tsx            # About section
│   ├── Philosophy.tsx       # Brand philosophy
│   ├── Features.tsx         # Amenities and specs
│   ├── Gallery.tsx          # Image gallery with lightbox
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer
│   └── AnimatedSection.tsx  # Reusable animation wrapper
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots file
├── tailwind.config.js       # Tailwind customization
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Development Tips

### Hot Reload

The development server supports hot reload. Any changes you make to the code will automatically refresh in the browser.

### TypeScript

The project uses TypeScript for type safety. If you see any type errors, they'll appear in your terminal and editor.

### Tailwind CSS

All styling uses Tailwind CSS utility classes. The custom color palette is defined in `tailwind.config.js`:
- **Sand**: Warm neutrals
- **Earth**: Dark earth tones
- **Sage**: Nature-inspired greens

### Animations

Animations use Framer Motion. Each section has scroll-triggered animations using the Intersection Observer API.

## Available Scripts

### `npm run dev`
Runs the development server on [http://localhost:3000](http://localhost:3000)

### `npm run build`
Creates an optimized production build

### `npm start`
Runs the production build locally (must run `build` first)

### `npm run lint`
Runs ESLint to check for code issues

## Common Issues & Solutions

### Port Already in Use

If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Dependencies Installation Fails

Try clearing cache:
```bash
npm cache clean --force
npm install
```

### TypeScript Errors

Restart your TypeScript server in VS Code:
- Press `Cmd/Ctrl + Shift + P`
- Type "TypeScript: Restart TS Server"

### Images Not Loading

Unsplash images require an internet connection. The project uses placeholder images from Unsplash. To use local images, see the `CUSTOMIZATION.md` guide.

## Environment Variables (Optional)

For features like contact forms or analytics:

1. Create `.env.local` file in root directory
2. Add your variables:
   ```
   NEXT_PUBLIC_GA_ID=your-analytics-id
   ```

See `CUSTOMIZATION.md` for more details on environment configuration.

## Making Changes

### Quick Edits

1. **Change Colors**: Edit `tailwind.config.js`
2. **Update Content**: Edit component files in `components/`
3. **Add Images**: Place in `public/images/` folder
4. **Modify Layout**: Edit `app/page.tsx`

See `CUSTOMIZATION.md` for detailed customization instructions.

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

Test the production build locally:
```bash
npm start
```

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions for:
- Vercel (recommended)
- Netlify
- Custom server
- Docker

## Getting Help

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Troubleshooting
- Check the terminal for error messages
- Inspect browser console (F12) for client-side errors
- Ensure all dependencies are installed
- Try restarting the development server

## Next Steps

1. ✅ **Run the development server** - See your site live
2. 📝 **Customize content** - Update text, images, and contact info
3. 🎨 **Adjust colors** - Match your brand identity
4. 📱 **Test responsiveness** - Check on mobile devices
5. 🚀 **Deploy** - Launch your site to production

---

**Ready to create something amazing!** ✨

For customization help, see `CUSTOMIZATION.md`
For deployment help, see `DEPLOYMENT.md`

