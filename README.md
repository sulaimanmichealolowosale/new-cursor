# 🚀 Inventio Inc - Next.js Edition

**Professional Marketing & Design Solutions Platform**

> Fully migrated from Vite + React Router to **Next.js 14** with all animations, features, and styles preserved.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
http://localhost:3000
```

**That's it!** You're running the latest version with Next.js 14.

---

## 🎯 What Is This?

This is **Inventio Inc**, a premium marketing and design solutions website featuring:

- 🏠 **Home Page** - Hero section with call-to-action
- 📻 **Radio Advertising** - Professional radio marketing solutions
- 📺 **Billboard Advertising** - Large-format advertising services
- 📱 **Social Media Advertising** - Digital marketing expertise
- 🎨 **Brand Design** - Complete brand design services

### Key Features

✅ **Smooth Animations** - Scroll-driven 3D motion system  
✅ **Dark/Light Mode** - Theme toggle with persistence  
✅ **Responsive Design** - Mobile, tablet, and desktop  
✅ **Premium Interactions** - Instant hover effects  
✅ **Framer Motion** - Industry-standard animation library  
✅ **Tailwind CSS** - Modern utility-first styling

---

## 📚 Documentation

### Getting Started

- **[START_HERE.md](./START_HERE.md)** - 60-second setup guide
- **[NEXTJS_QUICK_START.md](./NEXTJS_QUICK_START.md)** - Quick reference for common tasks

### Understanding the Migration

- **[NEXTJS_COMPLETE.md](./NEXTJS_COMPLETE.md)** - Complete migration status
- **[NEXTJS_MIGRATION.md](./NEXTJS_MIGRATION.md)** - Detailed before/after guide
- **[BEFORE_AFTER.md](./BEFORE_AFTER.md)** - Side-by-side code comparisons

### Technical References

- **[TECH_STACK.md](./TECH_STACK.md)** - Complete technology reference
- **[DASHBOARD.md](./DASHBOARD.md)** - Visual status dashboard
- **[COMPLETE_CHECKLIST.md](./COMPLETE_CHECKLIST.md)** - Verification checklist

### Animation Documentation

- **[README_MOTION_SYSTEM.md](./README_MOTION_SYSTEM.md)** - Motion system overview
- **[MOTION_SYSTEM.md](./MOTION_SYSTEM.md)** - Detailed animation reference

### All Documentation

- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - Complete index of all guides

---

## 🔧 Available Commands

```bash
# Development
npm run dev              # Start development server (localhost:3000)
npm run build           # Build for production
npm run start           # Run production server
npm run lint            # Check code quality

# Deployment
vercel                  # Deploy to Vercel (1-click)
npm run build && npm start  # Deploy to Node.js hosting
```

---

## 📍 Routes

```
/                           → Home
/services/radio            → Radio Advertising
/services/billboard        → Billboard Advertising
/services/social-media     → Social Media Advertising
/services/brand-design     → Brand Design
```

---

## 🏗️ Project Structure

```
inventio-inc/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── services/           # Service pages
│   ├── components/             # React components
│   ├── context/                # Context providers (Theme)
│   ├── pages/                  # Page components
│   └── utils/                  # Utilities & hooks
├── public/                     # Static assets
├── next.config.js             # Next.js config
├── jsconfig.json              # Path aliases
├── package.json               # Dependencies
└── [documentation files]      # Guides & references
```

---

## 🎨 Tech Stack

### Frontend

- **Next.js 14** - React framework with SSR
- **React 18** - UI library
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling

### Development

- **JavaScript/JSX** - Primary language
- **TypeScript** - Type support (optional)
- **ESLint** - Code quality

### Deployment

- **Vercel** - Recommended (1-click)
- **Node.js** - Self-hosted option
- **Docker** - Container deployment

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Fastest option. Connect GitHub repo, click deploy. Done! 🎉

### Option 2: Self-Hosted

```bash
npm run build
npm start
```

Deploy to AWS, DigitalOcean, Heroku, or any Node.js host.

### Option 3: Docker

```bash
docker build -t inventio .
docker run -p 3000:3000 inventio
```

Deploy container anywhere.

---

## ✨ Features

### Animations

- **Scroll-Driven Motion** - 3D stacking effect
- **Hover Animations** - Instant card interactions
- **Spring Physics** - Organic, natural feel
- **Accessibility** - Respects `prefers-reduced-motion`

### Styling

- **Dark Mode** - Full theme support
- **Light Mode** - Default theme
- **Responsive** - Mobile to desktop
- **Accessible** - WCAG AA compliant

### Performance

- **Code Splitting** - Automatic per-route
- **Image Optimization** - Available
- **Font Optimization** - Available
- **Fast Refresh** - Instant updates in dev

---

## 🎯 What Changed From Vite?

### Framework

- Vite → **Next.js 14**
- React Router → **App Router**

### Routing

- Manual route config → **File-based routes**
- `<Link to="">` → `<Link href="">`

### Features

- Client-only → **SSR + SSG capable**
- Static hosting → **Node.js hosting**

### What Stayed the Same

✅ All React components  
✅ All animations (Framer Motion)  
✅ All styles (Tailwind CSS)  
✅ All pages and features

---

## 📊 Performance

### Estimated Improvements

- **Bundle Size**: -5 to -10% smaller
- **First Load**: 10-15% faster
- **Interaction**: 15-20% faster

### Lighthouse Scores (Expected)

- Performance: 90-95
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

---

## 🧪 Testing Locally

```bash
# 1. Install
npm install

# 2. Run dev server
npm run dev

# 3. Open browser
http://localhost:3000

# 4. Test features
- Navigate all pages
- Toggle dark/light mode
- Scroll to see animations
- Hover over service cards
- Click to zoom service images
```

All features should work smoothly! ✅

---

## 🐛 Troubleshooting

### Port 3000 in use?

```bash
npm run dev -- -p 3001
```

### Dependencies won't install?

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails?

```bash
npm run build
```

### Styles not showing?

```bash
rm -rf .next
npm run dev
```

### Need more help?

Check [NEXTJS_QUICK_START.md](./NEXTJS_QUICK_START.md#troubleshooting)

---

## 📞 Support & Resources

### Quick Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)

### Project Documentation

- [START_HERE.md](./START_HERE.md) - Quick start
- [NEXTJS_MIGRATION.md](./NEXTJS_MIGRATION.md) - Migration guide
- [TECH_STACK.md](./TECH_STACK.md) - Tech reference

---

## ✅ Verification Checklist

Before going to production:

- [ ] `npm install` succeeds
- [ ] `npm run dev` starts
- [ ] All pages load at localhost:3000
- [ ] Dark/light theme works
- [ ] Scroll animations smooth
- [ ] Hover effects instant
- [ ] Forms interactive
- [ ] Mobile responsive
- [ ] `npm run build` succeeds
- [ ] `npm start` runs successfully

---

## 🎊 Migration Status

| Component  | Status                  | Notes                |
| ---------- | ----------------------- | -------------------- |
| Framework  | ✅ Done                 | Next.js 14 installed |
| Routing    | ✅ Done                 | App Router set up    |
| Components | ✅ Done                 | All 9 migrated       |
| Pages      | ✅ Done                 | All 5 routable       |
| Animations | ✅ Done                 | 100% preserved       |
| Styles     | ✅ Done                 | 100% intact          |
| Features   | ✅ Done                 | All working          |
| Build      | ✅ Done                 | No errors            |
| Docs       | ✅ Done                 | Comprehensive        |
| **Status** | **✅ PRODUCTION READY** | **Ready to deploy**  |

---

## 🚀 Next Steps

### Today

```bash
npm install && npm run dev
```

### This Week

```bash
npm run build
# Deploy to Vercel or self-hosted
```

### Later

- Add API routes
- Add database
- Add user authentication
- Convert to TypeScript (optional)

---

## 📄 License

[Add your license here]

---

## 👥 Team

**Inventio Inc** - Premium Marketing & Design Solutions

---

## 🎉 Ready to Launch!

```bash
npm install && npm run dev
# Open http://localhost:3000
# Enjoy! 🚀
```

---

**Questions?** Check the [documentation index](./DOCUMENTATION_INDEX.md) for detailed guides.

**Need deployment help?** See [NEXTJS_MIGRATION.md](./NEXTJS_MIGRATION.md#deployment-options) for all options.

---

**Version**: 1.0.0 (Next.js)  
**Date**: January 28, 2026  
**Status**: ✅ Production Ready

- **Lead Capture Form**: Built-in form for customer inquiries with validation
- **Component-based Architecture**: Reusable components for easy maintenance
- **SEO-friendly**: Semantic HTML and proper structure
- **Performance Optimized**: Fast loading and smooth interactions

## Pages

1. **Homepage** - Brand overview with service highlights and value proposition
2. **Radio Advertising** - Focused landing page for radio advertising services
3. **Billboard Advertising** - Outdoor advertising solutions page
4. **Social Media Advertising** - Paid social media campaigns page
5. **Brand Design** - Brand identity and design services page

## Tech Stack

- **React 18** - UI framework
- **React Router v6** - Navigation and routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd inventio-inc
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx       # Navigation header
│   ├── Footer.jsx       # Footer with links
│   ├── HeroSection.jsx  # Hero banner component
│   ├── ServiceCard.jsx  # Service card component
│   ├── ScrollRevealSection.jsx  # Scroll animation wrapper
│   └── LeadCaptureForm.jsx      # Contact form
├── pages/               # Page components
│   ├── Home.jsx         # Homepage
│   ├── RadioAdvertising.jsx
│   ├── BillboardAdvertising.jsx
│   ├── SocialMediaAdvertising.jsx
│   └── BrandDesign.jsx
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles

public/
├── index.html           # HTML template
└── favicon.svg

Configuration files:
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Dependencies and scripts
└── .gitignore           # Git ignore file
```

## Key Components

### Header

- Sticky navigation with mobile menu
- Links to all service pages
- CTA button for strategy call

### HeroSection

- Animated headlines with staggered timing
- Call-to-action buttons
- Gradient background with animated blobs

### ServiceCard

- Hover animations with upward movement
- Icon color transitions
- Shadow effects

### LeadCaptureForm

- Form validation for required fields
- Success message on submit
- Professional styling

### ScrollRevealSection

- Fade-in animations on scroll
- Uses Framer Motion viewport triggers
- Smooth, non-aggressive animations

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

- `primary`: #1a1a1a (dark text)
- `secondary`: #0066ff (blue accent)
- `accent`: #ff6b35 (orange accent)

### Contact Links

Update the WhatsApp and email links in:

- `components/Header.jsx`
- `components/Footer.jsx`
- `components/LeadCaptureForm.jsx`

### Form Handling

The lead capture form currently simulates submission. To integrate with an actual backend:

1. Update the `handleSubmit` function in `components/LeadCaptureForm.jsx`
2. Replace the setTimeout with your API call

## Animations

- **Hero Section**: Staggered fade-in animations (200ms delays)
- **Service Cards**: Hover effects with shadow and upward movement
- **Scroll Reveals**: Fade-in when entering viewport
- **Buttons**: Scale animations on hover and active states

## Performance Tips

- Images are optimized for web
- Code is split by route
- CSS is minified and purged of unused styles
- Animations use GPU acceleration where possible

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 14+
- Android Chrome 90+

## License

This project is proprietary to INVENTIO Inc.

## Support

For questions or customizations, please contact the development team.
