# Apple-Inspired Portfolio Website

A modern, sleek portfolio website built with Next.js 14, featuring smooth animations and an Apple-inspired design aesthetic.

![Portfolio Preview](https://placehold.co/1200x630/000000/f5f5f7?text=Portfolio+Website)

## ✨ Features

- 🎨 **Apple-inspired minimalist design** - Clean, elegant interface with generous spacing
- 🌊 **Buttery-smooth scrolling** - Lenis smooth scroll at 60fps
- ✨ **Framer Motion animations** - Fade-ins, parallax, and micro-interactions
- 📱 **Fully responsive** - Mobile, tablet, and desktop optimized
- 🔍 **SEO optimized** - Complete meta tags and Open Graph support
- ♿ **Accessible** - WCAG 2.1 AA compliant with keyboard navigation
- ⚡ **Performance focused** - Optimized images and lazy loading
- 🎯 **TypeScript** - Full type safety throughout

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Navigate to the project directory:**
```bash
cd "Personal Website"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🎨 Customization Guide

### 1. Personal Information

Update **`lib/constants.ts`**:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',              // Your full name
  title: 'Your Professional Title', // e.g., "Full-Stack Developer"
  description: 'Your bio/description',
  url: 'https://yourwebsite.com', // Your website URL
  email: 'your@email.com',        // Your email
};
```

### 2. Projects

Edit **`data/projects.ts`** to add your projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Short description (1-2 lines)',
  longDescription: 'Detailed description (optional)',
  image: '/projects/project-name.jpg', // Or use placeholder URLs
  tags: ['React', 'TypeScript', 'Next.js'],
  status: 'completed', // or 'in-progress'
  liveUrl: 'https://project-url.com',
  githubUrl: 'https://github.com/username/project',
  featured: true, // Show on featured list
  order: 1, // Display order
}
```

### 3. Work Experience

Update **`data/experience.ts`**:

```typescript
{
  id: 'unique-id',
  company: 'Company Name',
  role: 'Your Role',
  period: 'Jan 2023 - Present',
  startDate: '2023-01-01',
  endDate: 'Present', // or specific date
  current: true,
  description: [
    'Achievement or responsibility 1',
    'Achievement or responsibility 2',
    // Add more bullet points
  ],
  technologies: ['React', 'Node.js', 'AWS'],
}
```

### 4. Skills

Modify **`data/skills.ts`**:

```typescript
{ name: 'React', category: 'frontend' },
{ name: 'Node.js', category: 'backend' },
{ name: 'Figma', category: 'design' },
{ name: 'Docker', category: 'tools' },
```

**Categories:**
- `frontend` - Blue color
- `backend` - Green color
- `design` - Purple color
- `tools` - Orange color

### 5. Social Links

Edit **`data/social.ts`**:

```typescript
{ name: 'GitHub', url: 'https://github.com/username', icon: 'Github' },
{ name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'Linkedin' },
```

**Available icons:** Any icon name from [Lucide React](https://lucide.dev/)

### 6. Images

**Profile Photo:**
- Add your photo to `/public/profile.jpg` (recommended: 600x600px)
- Update the path in `components/sections/About.tsx` if needed

**Project Images:**
- Add project images to `/public/projects/`
- Reference them in `data/projects.ts` like: `image: '/projects/my-project.jpg'`
- Recommended size: 800x600px (4:3 aspect ratio)

**Favicon:**
- Replace `/public/favicon.ico` with your own

**Open Graph Image:**
- Add `/public/opengraph-image.png` (1200x630px) for social sharing

### 7. Colors (Optional)

Customize the color scheme in **`tailwind.config.ts`**:

```typescript
colors: {
  apple: {
    black: '#000000',      // Background
    white: '#f5f5f7',      // Primary text
    gray: '#a1a1a6',       // Secondary text
    blue: '#0071e3',       // Accent color
    'gray-dark': '#1d1d1f',
    'gray-light': '#86868b',
  },
},
```

### 8. Navigation Items

Modify **`lib/constants.ts`** to change navigation:

```typescript
export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
```

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Navigation, Footer, etc.
│   ├── sections/           # Hero, About, Experience, Projects, Contact
│   ├── ui/                 # Reusable components
│   ├── animations/         # Animation components
│   └── providers/          # Context providers (Smooth Scroll)
├── data/                   # Content data files
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── social.ts
├── lib/                    # Utilities
│   ├── animations.ts       # Framer Motion variants
│   ├── utils.ts            # Helper functions
│   └── constants.ts        # Site configuration
├── types/                  # TypeScript types
└── public/                 # Static assets
    ├── projects/           # Project images
    └── profile.jpg
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Netlify:** Connect your repo and deploy
- **Railway:** One-click deploy from GitHub
- **DigitalOcean App Platform:** Deploy from repository

## 🎯 Performance Tips

- **Images:** Optimize images before adding them (use tools like [TinyPNG](https://tinypng.com/))
- **Lighthouse:** Run `npm run build` and test with Lighthouse
- **Bundle Size:** Check bundle size with `npm run build`

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support (Tab, Enter, Escape)
- Focus visible states
- Screen reader friendly
- Color contrast meets WCAG AA standards

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎨 Design Philosophy

This portfolio follows Apple's design principles:

- **Simplicity:** Clean, uncluttered interface
- **Typography:** Large, bold headlines with generous line-height
- **Spacing:** Generous padding and margins (80-160px between sections)
- **Color:** Minimal color palette with high contrast
- **Animation:** Purposeful, smooth, and never distracting
- **Performance:** Fast loading, 60fps animations

## 🐛 Common Issues

### Smooth scrolling not working
- Ensure `SmoothScrollProvider` wraps all content in `app/layout.tsx`
- Check that it's a client component (`'use client'`)

### Animations not triggering
- Verify `whileInView` amount (try 0.2-0.3)
- Check that parent elements have `overflow: visible`

### Images not loading
- Check image paths are correct
- Verify Next.js Image domains in `next.config.mjs`
- For external images, add domain to `remotePatterns`

### TypeScript errors
- Run `npm run type-check` to see all errors
- Ensure all imports are correct

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- **Design Inspiration:** Apple Inc.
- **Built with:** Next.js, Framer Motion, Lenis
- **Icons:** Lucide React
- **Fonts:** SF Pro Display (system font stack)

## 💬 Support

If you have questions or need help customizing:
- Check the customization guide above
- Review the code comments in key files
- Open an issue on GitHub (if applicable)

---

**Built with ❤️ using Next.js and Framer Motion**

✨ **Ready to make it yours? Start by editing `lib/constants.ts` and `data/` files!**
