# INVENTIO Inc - Modern Agency Website

A professional, modern landing page website for INVENTIO Inc, a full-service marketing and advertising agency. Built with React, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Modern UI/UX**: Clean, professional aesthetic with premium feel
- **Smooth Animations**: Framer Motion animations for entrance effects and interactions
- **Multi-page Structure**: Homepage and 5 dedicated service landing pages
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
