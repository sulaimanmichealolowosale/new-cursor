# 🏗️ Tech Stack Reference - Next.js Edition

## Complete Technology Stack

### Core Framework

- **Next.js 14.0.0**
  - App Router (React 18 routing)
  - Server-side rendering (SSR)
  - Static generation (SSG)
  - API routes capable
  - Built-in optimization
  - Fast Refresh
  - Image optimization
  - Font optimization

### Frontend

- **React 18.2.0**
  - Component-based architecture
  - Hooks (useState, useContext, useRef, useEffect)
  - Strict mode for development
  - Concurrent rendering

- **Framer Motion 10.16.16**
  - Scroll animations (useScroll, useTransform)
  - Spring physics
  - Gesture animations (whileHover, whileTap)
  - Layout animations
  - Accessibility support (prefers-reduced-motion)

- **Tailwind CSS 3.3.6**
  - Utility-first CSS framework
  - Dark mode support (class-based)
  - Responsive design (mobile-first)
  - Custom color palette
  - Built-in animations
  - Accessibility plugins

### Development Tools

- **TypeScript 5.3.3** (optional but recommended)
  - Type safety
  - Better IDE support
  - Runtime error prevention

- **ESLint** (built-in with Next.js)
  - Code quality
  - Best practices
  - Core Web Vitals rules

- **PostCSS 8.4.32**
  - Autoprefixer plugin
  - CSS transformation
  - Vendor prefixes

### Build & Deployment

- **Node.js** (18.17+ or 20+)
  - Runtime environment
  - Package management (npm)

- **npm/npx**
  - Package manager
  - Script runner
  - Dependency management

---

## Project Structure

```
inventio-inc/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── services/           # Service pages
│   │       ├── radio/page.tsx
│   │       ├── billboard/page.tsx
│   │       ├── social-media/page.tsx
│   │       └── brand-design/page.tsx
│   │
│   ├── components/             # React components
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer
│   │   ├── ServiceCard.jsx     # Service cards with zoom
│   │   ├── HeroSection.jsx     # Hero with animations
│   │   ├── ScrollRevealSection.jsx  # Scroll reveal
│   │   ├── ScrollSection.jsx   # 3D scroll section
│   │   ├── ScrollContainer.jsx # Root scroll container
│   │   ├── LeadCaptureForm.jsx # Contact form
│   │   └── StackedSection.jsx  # Stacked sections (legacy)
│   │
│   ├── context/                # Context providers
│   │   └── ThemeContext.jsx    # Dark/light theme
│   │
│   ├── pages/                  # Page components (used by app routes)
│   │   ├── Home.jsx
│   │   ├── RadioAdvertising.jsx
│   │   ├── BillboardAdvertising.jsx
│   │   ├── SocialMediaAdvertising.jsx
│   │   └── BrandDesign.jsx
│   │
│   └── utils/                  # Utilities
│       ├── motionVariants.js       # Framer Motion presets
│       ├── scrollMotionSystem.js   # Premium scroll system
│       ├── useScrollAnimation.js   # Custom scroll hook
│       ├── ImageUtils.jsx          # Image paths
│       ├── stackedSectionVariants.js
│       └── themeTransition.js
│
├── public/                     # Static assets
│   ├── images/                 # Image files
│   └── ...
│
├── Configuration Files
├── next.config.js              # Next.js config
├── tsconfig.json               # TypeScript config
├── jsconfig.json               # JS path aliases
├── tailwind.config.ts          # Tailwind CSS
├── postcss.config.js           # PostCSS config
├── .eslintrc.json              # ESLint config
└── package.json                # Dependencies & scripts

```

---

## Key Dependencies

### Production Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "framer-motion": "^10.16.16"
  }
}
```

#### React (18.2.0)

- React core library
- Component rendering
- Hooks system
- State management

#### Next.js (14.0.0)

- Framework wrapper
- Routing (App Router)
- Server rendering
- Optimization
- Built-in API support

#### Framer Motion (10.16.16)

- Animation library
- Scroll interactions
- Spring physics
- Gesture support
- SVG animations

### Dev Dependencies

```json
{
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@types/node": "^20.0.0",
    "typescript": "^5.3.3",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6"
  }
}
```

---

## Design System

### Colors

```javascript
colors: {
  primary: {
    50: '#faf8f6',
    100: '#f5f1ed',
    200: '#ebe3db',
    300: '#ddd0c5',
    400: '#c9a891',
    500: '#b5815d',
    600: '#a1694b',
    700: '#7d523b',
    800: '#59402b',
    900: '#3d2b1d',
  },
  accent: {
    light: '#ff9f43',
    dark: '#e06c3c',
  },
}
```

### Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Font Sizes**: Tailwind defaults (12px - 48px)
- **Font Weights**: 400, 500, 600, 700, 800

### Spacing

- **Base Unit**: 4px (Tailwind default)
- **Scale**: 1, 2, 3, 4, 6, 8, 12, 16, 20, 24...

### Shadows

- `sm`: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- `md`: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- `lg`: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
- `xl`: 0 20px 25px -5px rgba(0, 0, 0, 0.1)

---

## Animation System

### Framer Motion Variants

```javascript
// Scroll-driven system
export const SCROLL_MOTION_CONFIG = {
  scaleRange: [1, 0.92],
  rotateXRange: [0, -8],
  translateZRange: [0, -80],
  opacityRange: [1, 0.4],
  spring: { stiffness: 100, damping: 30, mass: 1 },
};

// Entrance animations
export const sectionEntranceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
```

### Scroll Motion Features

- **Scale**: 1.0 → 0.92 (depth compression)
- **Rotation**: 0° → -8° (physical tilt)
- **Opacity**: 1.0 → 0.4 (fade out)
- **Translate Z**: 0px → -80px (3D depth)
- **Spring Physics**: Organic, non-linear motion

---

## Performance Optimizations

### Next.js Built-in

- ✅ Automatic code splitting per route
- ✅ Image optimization (next/image)
- ✅ Font optimization (next/font)
- ✅ Script optimization (next/script)
- ✅ Dynamic imports
- ✅ Prefetching

### CSS

- ✅ Tailwind CSS purging
- ✅ PostCSS optimization
- ✅ Autoprefixer for browser support

### JavaScript

- ✅ Tree shaking (unused code removal)
- ✅ Minification in production
- ✅ Gzip compression
- ✅ Service worker ready

---

## Deployment Targets

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

- Optimal for Next.js
- Automatic deployments
- Zero-config setup
- Edge functions
- Analytics included

### Self-hosted (Node.js)

```bash
npm run build
npm start
```

Supported platforms:

- AWS (EC2, ECS, Lambda)
- DigitalOcean
- Heroku
- Render
- Railway
- Fly.io
- Azure App Service

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Development Workflow

### 1. Setup

```bash
npm install
```

### 2. Development

```bash
npm run dev
# Open http://localhost:3000
```

### 3. Linting

```bash
npm run lint
```

### 4. Build

```bash
npm run build
```

### 5. Production

```bash
npm start
# Open http://localhost:3000
```

---

## Browser Support

### Supported Browsers

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Opera 76+

### Features Used

- CSS Grid & Flexbox
- CSS Custom Properties
- CSS Transforms (3D)
- Intersection Observer
- LocalStorage
- matchMedia (prefers-color-scheme)

---

## Accessibility

### Features

- ✅ prefers-reduced-motion support
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast (WCAG AA)
- ✅ Focus states
- ✅ Skip links (can add)

### Guidelines Followed

- WCAG 2.1 Level AA
- Semantic HTML
- Accessible forms
- Image alt text
- Meaningful link text

---

## Environment Variables (Optional)

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=UA-...
```

---

## Testing (Future Enhancement)

Recommended libraries:

- **Jest**: Unit testing
- **React Testing Library**: Component testing
- **Playwright**: E2E testing
- **Cypress**: E2E testing

---

## API Routes (Future Enhancement)

Next.js enables backend API:

```javascript
// src/app/api/contact/route.ts
export async function POST(request) {
  const data = await request.json();
  // Handle form submission
  return Response.json({ success: true });
}
```

---

## Database (Future Enhancement)

Recommended options:

- **PostgreSQL**: Relational database
- **MongoDB**: NoSQL database
- **Supabase**: Postgres + Auth
- **Firebase**: Cloud database
- **Prisma**: ORM

---

## Version Timeline

| Date       | Version | Changes                     |
| ---------- | ------- | --------------------------- |
| 2025-12-XX | 0.0.1   | Vite + React Router initial |
| 2026-01-28 | 1.0.0   | Migrated to Next.js 14      |

---

## Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

### Deployment

- [Vercel Deployment](https://vercel.com/docs/deployments/overview)
- [Next.js on AWS](https://aws.amazon.com/blogs/networking-and-content-delivery/deploying-nextjs-applications-to-aws-lambda/)
- [Docker Deployment](https://docs.docker.com/language/nodejs/)

### Learning

- [Next.js Learn](https://nextjs.org/learn)
- [React Official Tutorial](https://react.dev/learn)
- [Web.dev Performance](https://web.dev/performance/)

---

**All systems ready for production deployment! 🚀**
