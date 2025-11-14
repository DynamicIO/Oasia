# OASIA - Luxury Villas Website

![OASIA](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop)

A stunning, modern website for OASIA - a luxury villa compound in Sheikh Zayed, Egypt. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## 🌿 Features

- **Modern & Elegant Design**: Clean, minimalistic aesthetic with nature-inspired colors
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Parallax effects, fade-ins, and interactive hover states using Framer Motion
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- **Interactive Components**: Dynamic gallery, contact form, and navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oasia-villas
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
oasia-villas/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx        # Navigation header with mobile menu
│   ├── Hero.tsx          # Hero section with parallax
│   ├── About.tsx         # About section with features
│   ├── Philosophy.tsx    # Brand philosophy section
│   ├── Features.tsx      # Amenities and specifications
│   ├── Gallery.tsx       # Image gallery with lightbox
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer with links and social media
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🎨 Design System

### Color Palette

- **Sand**: Warm neutral tones for backgrounds (#faf9f7 - #3a362b)
- **Earth**: Deep earth tones for text and accents (#f7f6f4 - #1a1814)
- **Sage**: Nature-inspired greens for highlights (#f6f8f6 - #1c261c)

### Typography

- **Headings**: Georgia serif font for elegance
- **Body**: Inter sans-serif font for readability

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Images**: [Unsplash](https://unsplash.com/) (placeholder images)

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Sections

1. **Hero**: Full-screen hero with parallax effect and call-to-action buttons
2. **About**: Introduction to OASIA with feature cards
3. **Philosophy**: Brand philosophy with parallax background
4. **Features**: Comprehensive amenities grid and villa specifications
5. **Gallery**: Interactive image gallery with lightbox
6. **Contact**: Contact form and office information
7. **Footer**: Links, social media, and additional information

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  sand: { /* your colors */ },
  earth: { /* your colors */ },
  sage: { /* your colors */ },
}
```

### Updating Content

All content is embedded in the components. To update text, images, or features, edit the respective component files in the `components/` directory.

### Adding New Sections

Create a new component in `components/` and import it in `app/page.tsx`:

```tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <NewSection />
    </main>
  )
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is created for OASIA Villas. All rights reserved.

## 👨‍💻 Development

Built with care to showcase luxury living in harmony with nature. For questions or support, please contact the development team.

---

**OASIA** - *Where Modern Design Meets Natural Tranquility*

