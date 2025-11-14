# OASIA Website Customization Guide

## Table of Contents
- [Changing Colors](#changing-colors)
- [Updating Content](#updating-content)
- [Replacing Images](#replacing-images)
- [Adding New Sections](#adding-new-sections)
- [Modifying Animations](#modifying-animations)
- [Form Integration](#form-integration)
- [Adding Analytics](#adding-analytics)

---

## Changing Colors

### Method 1: Tailwind Config (Recommended)

Edit `tailwind.config.js`:

```javascript
colors: {
  // Your custom color palette
  sand: {
    50: '#your-color',
    100: '#your-color',
    // ... etc
  },
}
```

### Method 2: Global CSS

Edit `app/globals.css` for one-off color changes.

### Quick Color Updates:

**Primary Brand Color (Sage Green)**:
- Find: `sage-600`, `sage-700`
- Replace with your brand color classes

**Background Colors**:
- Main backgrounds use: `sand-50`, `white`
- Dark backgrounds use: `earth-900`, `sage-900`

**Text Colors**:
- Headings: `earth-800`
- Body text: `earth-600`, `earth-700`
- Light text: `sand-100`, `sand-200`

---

## Updating Content

### Hero Section (`components/Hero.tsx`)

```tsx
// Update headline
<h1>YOUR BRAND NAME</h1>

// Update tagline
<p>Your custom tagline here</p>

// Change background image
style={{ backgroundImage: `url('your-image-url')` }}
```

### About Section (`components/About.tsx`)

```tsx
// Edit features array
const features = [
  {
    icon: <YourIcon />,
    title: 'Your Feature',
    description: 'Your description',
  },
  // Add more features
]
```

### Contact Information (`components/Contact.tsx`, `components/Footer.tsx`)

Update contact details:
```tsx
const contactInfo = [
  { title: 'Location', content: 'Your Address' },
  { title: 'Phone', content: 'Your Phone' },
  { title: 'Email', content: 'your@email.com' },
]
```

### Navigation Menu (`components/Header.tsx`)

```tsx
const navItems = [
  { name: 'Your Link', href: '#section' },
  // Add or remove items
]
```

---

## Replacing Images

### Option 1: Use Your Own Images

1. **Add images to `public/images/` folder**:
   ```
   public/
   └── images/
       ├── hero-bg.jpg
       ├── villa-1.jpg
       └── ...
   ```

2. **Update image references**:
   ```tsx
   // Replace Unsplash URLs with:
   src="/images/your-image.jpg"
   ```

### Option 2: Use Next.js Image Component

For better performance:

```tsx
import Image from 'next/image'

<Image
  src="/images/villa-1.jpg"
  alt="Description"
  width={1200}
  height={800}
  className="object-cover"
  priority // for above-the-fold images
/>
```

### Image Optimization Tips:

- **Format**: Use WebP or AVIF for best compression
- **Size**: Hero images: ~2400px wide, Gallery: ~1200px wide
- **Compression**: Use tools like TinyPNG or Squoosh
- **Lazy loading**: Automatic with Next.js Image component

---

## Adding New Sections

### Step 1: Create Component

Create `components/YourSection.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const YourSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="your-section" className="py-20 bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        {/* Your content here */}
      </motion.div>
    </section>
  )
}

export default YourSection
```

### Step 2: Add to Page

Edit `app/page.tsx`:

```tsx
import YourSection from '@/components/YourSection'

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <YourSection />
    </main>
  )
}
```

### Step 3: Update Navigation

Add link in `components/Header.tsx`:

```tsx
{ name: 'Your Section', href: '#your-section' }
```

---

## Modifying Animations

### Animation Speed

Change duration values:
```tsx
transition={{ duration: 0.8 }} // Slower: 1.2, Faster: 0.4
```

### Animation Types

**Fade In**:
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```

**Slide Up**:
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```

**Slide From Left**:
```tsx
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
```

**Scale In**:
```tsx
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
```

### Stagger Children

For lists or grids:
```tsx
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1, // Delay between items
    },
  },
}
```

### Disable Animations

Remove or comment out `motion.` components and use regular HTML elements.

---

## Form Integration

### Option 1: Email Service (Recommended)

**Using Resend**:

1. Install:
   ```bash
   npm install resend
   ```

2. Create API route `app/api/contact/route.ts`:
   ```ts
   import { Resend } from 'resend'
   
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   export async function POST(request: Request) {
     const body = await request.json()
     
     await resend.emails.send({
       from: 'OASIA <onboarding@resend.dev>',
       to: 'info@oasia-villas.com',
       subject: 'New Contact Form Submission',
       html: `<p>From: ${body.name}</p>...`,
     })
     
     return Response.json({ success: true })
   }
   ```

3. Update form submission in `components/Contact.tsx`:
   ```tsx
   const handleSubmit = async (e) => {
     e.preventDefault()
     const res = await fetch('/api/contact', {
       method: 'POST',
       body: JSON.stringify(formData),
     })
     // Handle response
   }
   ```

### Option 2: Third-party Form Services

- **Formspree**: Add `action="https://formspree.io/f/{your-id}"`
- **Netlify Forms**: Add `data-netlify="true"` attribute
- **Google Forms**: Embed or use form action URL

---

## Adding Analytics

### Google Analytics 4

1. **Get tracking ID** from Google Analytics

2. **Create component** `components/Analytics.tsx`:
   ```tsx
   import Script from 'next/script'
   
   export default function Analytics() {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `}
         </Script>
       </>
     )
   }
   ```

3. **Add to layout** `app/layout.tsx`:
   ```tsx
   import Analytics from '@/components/Analytics'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

4. **Add to `.env.local`**:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

---

## Common Customizations

### Change Font

1. **Google Fonts** in `app/layout.tsx`:
   ```tsx
   import { Playfair_Display } from 'next/font/google'
   
   const playfair = Playfair_Display({ subsets: ['latin'] })
   ```

2. **Update Tailwind**:
   ```js
   fontFamily: {
     serif: ['Playfair Display', 'serif'],
   }
   ```

### Add WhatsApp Button

```tsx
<a
  href="https://wa.me/1234567890"
  className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 z-40"
>
  <WhatsAppIcon />
</a>
```

### Add Loading States

```tsx
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  setIsLoading(false)
}, [])

if (isLoading) return <LoadingSpinner />
```

---

## Need Help?

- Check [Next.js Documentation](https://nextjs.org/docs)
- Review [Framer Motion Docs](https://www.framer.com/motion/)
- See [Tailwind CSS Docs](https://tailwindcss.com/docs)

**Happy Customizing!** 🎨

