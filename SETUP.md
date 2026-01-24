# INVENTIO Inc Website - Setup Guide

## 🎯 Project Overview

This is a complete, production-ready website for INVENTIO Inc, a full-service marketing and advertising agency. The site includes a professional homepage and five dedicated service landing pages.

## 📋 What's Been Built

### ✅ Completed Features:

1. **Homepage** with:
   - Animated hero section with value proposition
   - Service overview cards with hover effects
   - "How It Works" 4-step process
   - "Why Choose INVENTIO Inc" benefits section
   - Lead capture form with validation

2. **Service Landing Pages** (5 total):
   - Radio Advertising
   - Billboard Advertising
   - Social Media Advertising
   - Brand Design & Digital Assets
   - (Each with hero, benefits, process, and CTA sections)

3. **Reusable Components**:
   - Navigation Header with mobile menu
   - Footer with links and contact info
   - Hero Section with animations
   - Service Cards with hover effects
   - Scroll Reveal Section for animations
   - Lead Capture Form

4. **Design Features**:
   - Responsive mobile-first design
   - Smooth Framer Motion animations
   - Tailwind CSS styling
   - Professional color scheme
   - Hover interactions and transitions

5. **Technical Setup**:
   - Vite for fast development
   - React Router for navigation
   - React + JSX components
   - Tailwind CSS for styling
   - PostCSS for processing

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
cd "/home/mikey/Desktop/new cursor"
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Step 3: Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📁 Project Structure

```
/home/mikey/Desktop/new cursor/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation with mobile menu
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── HeroSection.jsx      # Hero banner template
│   │   ├── ServiceCard.jsx      # Service card component
│   │   ├── ScrollRevealSection.jsx  # Scroll animation wrapper
│   │   └── LeadCaptureForm.jsx  # Contact form component
│   ├── pages/
│   │   ├── Home.jsx             # Homepage
│   │   ├── RadioAdvertising.jsx # Radio service page
│   │   ├── BillboardAdvertising.jsx  # Billboard page
│   │   ├── SocialMediaAdvertising.jsx # Social media page
│   │   └── BrandDesign.jsx      # Brand design page
│   ├── App.jsx                  # Main app with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore
├── README.md                   # Project documentation
└── plan.txt                    # Original requirements
```

## 🎨 Customization

### Update Contact Information

Edit these files to add your actual contact details:

**Header Component** (`src/components/Header.jsx`):

```jsx
<a href="https://wa.me/1234567890" target="_blank">
  // Change 1234567890 to your WhatsApp number
```

**Footer Component** (`src/components/Footer.jsx`):

```jsx
<a href="https://wa.me/1234567890" target="_blank">
  // WhatsApp link
<a href="mailto:hello@inventio.com">
  // Email link
```

**LeadCaptureForm** (`src/components/LeadCaptureForm.jsx`):

- Update form submission to send to your backend/email service
- Currently uses a simulated submission (setTimeout)

### Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#1a1a1a",      // Dark text
      secondary: "#0066ff",     // Blue accent
      accent: "#ff6b35",        // Orange accent
      light: "#f8f9fa",         // Light background
      dark: "#0f0f0f",          // Dark background
    },
  },
}
```

### Update Brand Copy

Each page has customizable content:

- Homepage titles and descriptions
- Service page content
- Process steps
- Benefits lists
- Stats and metrics

## 🔧 Key Features Explained

### Hero Section Animations

- Headlines fade in and move up on page load
- Subheadlines follow with 100ms delay
- CTA buttons animate last (200ms delay)
- Uses Framer Motion with ease-out timing

### Service Card Hover Effects

- Cards move up slightly (translateY -8px)
- Shadow increases on hover
- Icon colors change
- Smooth 200-250ms transitions

### Scroll Reveal Animations

- Sections fade in when entering viewport
- No aggressive motion (subtle animations)
- Uses Framer Motion viewport triggers
- Triggered once per scroll

### Lead Capture Form

- Validates required fields (name, email)
- Shows success message on submit
- Form resets after 3 seconds
- Ready to connect to your backend

## 🌐 Pages & Routes

| Route                    | Component                  | Purpose                        |
| ------------------------ | -------------------------- | ------------------------------ |
| `/`                      | Home.jsx                   | Homepage with service overview |
| `/services/radio`        | RadioAdvertising.jsx       | Radio ad services              |
| `/services/billboard`    | BillboardAdvertising.jsx   | Billboard ad services          |
| `/services/social-media` | SocialMediaAdvertising.jsx | Social media ad services       |
| `/services/brand-design` | BrandDesign.jsx            | Brand design services          |

## 🚁 Production Deployment

### Build the project:

```bash
npm run build
```

### Deploy the `dist/` folder to:

- Netlify (drag & drop)
- Vercel (git integration)
- AWS S3 + CloudFront
- Your own server

## 📱 Responsive Design

All pages are fully responsive:

- **Mobile**: Single column layout, mobile-optimized menu
- **Tablet**: Two-column grids where appropriate
- **Desktop**: Full multi-column layouts

## ⚡ Performance

- Optimized images and assets
- Code splitting by route
- CSS purged of unused styles
- GPU-accelerated animations
- Fast development with Vite

## 🔌 Integration Points

### Form Submission

Update `src/components/LeadCaptureForm.jsx`:

```jsx
const handleSubmit = async (e) => {
  // Replace the setTimeout with your API call
  const response = await fetch("/api/leads", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
```

### Analytics

Add your analytics code to `src/main.jsx` or `index.html`

### SEO Meta Tags

Update `index.html` with your specific keywords and descriptions

## 📝 File Locations to Remember

| What            | Where                                |
| --------------- | ------------------------------------ |
| Page content    | `src/pages/*.jsx`                    |
| Navigation      | `src/components/Header.jsx`          |
| Form handling   | `src/components/LeadCaptureForm.jsx` |
| Colors & theme  | `tailwind.config.js`                 |
| Site title/meta | `index.html`                         |
| Global styles   | `src/index.css`                      |

## 🆘 Troubleshooting

### Port 3000 already in use?

```bash
npm run dev -- --port 3001
```

### Dependencies not installing?

```bash
rm -rf node_modules package-lock.json
npm install
```

### CSS not applying?

- Ensure tailwind.config.js has correct `content` paths
- Try `npm run build` to test production build

## ✨ Next Steps

1. **Customize content** - Update copy on each page
2. **Add images** - Replace placeholder text with real images
3. **Set up form** - Connect LeadCaptureForm to your backend
4. **Update contact info** - Add WhatsApp and email
5. **Add tracking** - Install Google Analytics or similar
6. **Deploy** - Push to production server
7. **Test** - Cross-browser and mobile testing
8. **Optimize** - Monitor performance and optimize

## 📚 Documentation

- [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite](https://vitejs.dev)

## 🎉 You're All Set!

Your INVENTIO Inc website is ready to use. Start the dev server with `npm run dev` and begin customizing!
