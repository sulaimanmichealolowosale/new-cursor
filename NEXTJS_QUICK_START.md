# ⚡ Quick Start - Next.js Edition

## 🚀 Get Up and Running

### 1. Install Dependencies

```bash
cd "/home/mikey/Desktop/new cursor"
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

**Open browser**: http://localhost:3000

---

## 📁 Key Files to Know

| File                           | Purpose                         |
| ------------------------------ | ------------------------------- |
| `src/app/layout.tsx`           | Root layout with providers      |
| `src/app/page.tsx`             | Home page (/)                   |
| `src/app/services/*/page.tsx`  | Service pages                   |
| `src/components/`              | React components                |
| `src/context/ThemeContext.jsx` | Dark mode provider              |
| `src/utils/`                   | Utilities, hooks, motion system |
| `next.config.js`               | Next.js configuration           |
| `jsconfig.json`                | Path aliases (@/\*)             |
| `tailwind.config.ts`           | Tailwind CSS config             |

---

## 🔧 npm Scripts

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Create production build
npm start         # Run production server
npm run lint      # Run ESLint
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

## 🎨 Features Maintained

✅ Framer Motion animations  
✅ Dark/Light theme toggle  
✅ Responsive design  
✅ Scroll-driven 3D motion system  
✅ Service cards with zoom modal  
✅ All original components

---

## 📝 What Changed?

- **Routing**: React Router → Next.js App Router
- **Build Tool**: Vite → Next.js (built on Webpack)
- **Server Rendering**: Client-only → SSR capable
- **Imports**: Added path aliases (@/\*)
- **Dependencies**: Removed `react-router-dom`

---

## 🚢 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

1. Connect your GitHub repo
2. Click deploy
3. Done! 🎉

---

## 🐛 Troubleshooting

**Port 3000 already in use?**

```bash
npm run dev -- -p 3001
```

**Build fails?**

```bash
npm install
npm run build
```

**Styles not showing?**

- Check `src/app/globals.css` exists
- Clear `.next` folder and rebuild

---

## 💡 Tips

- Use `@/` for imports instead of relative paths
- Use `next/link` for internal navigation
- Add `'use client'` at top of interactive components
- Check browser console for any errors

---

**Need help?** Check [NEXTJS_MIGRATION.md](./NEXTJS_MIGRATION.md) for detailed info.
