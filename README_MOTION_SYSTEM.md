# Inventio Inc - Premium Motion Design System

## Scroll-Driven 3D Agency Website

### 🎬 Overview

Inventio Inc now features a **premium, scroll-driven motion system** inspired by high-end agency websites (Havas-style) without cloning or copying proprietary designs. All animations are:

- **Scroll-linked**: Motion tied directly to scroll position, never autoplay
- **3D Spatial**: Sections feel like physical cards stacking in space with depth
- **Performance-focused**: Only `transform` and `opacity` animated (GPU-accelerated)
- **Accessible**: Respects `prefers-reduced-motion` system preference
- **Theme-aware**: Full dark/light mode support with accent color integration

---

## 🏗️ Architecture

### Core Components

#### 1. **ScrollMotionSystem** (`src/utils/scrollMotionSystem.js`)

The foundation of the entire motion system. Provides:

- **`useScrollDrivenSection()`**: Maps scroll progress to 3D transforms
- **`useParallaxScroll()`**: Creates subtle parallax effects
- **`useDepthScale()`**: Staggered depth scaling for cards
- **Configuration**: Adjustable motion ranges and spring physics
- **Presets**: Entrance animations and stagger patterns

#### 2. **ScrollSection Component** (`src/components/ScrollSection.jsx`)

Ready-to-use full-screen section with automatic scroll motion:

```jsx
<ScrollSection
  id="services"
  sectionIndex={1}
  background="bg-white dark:bg-primary-900"
>
  {/* Your content */}
</ScrollSection>
```

**Features**:

- Automatic entrance animation
- 3D perspective and transform layering
- Theme-aware backgrounds
- Accessibility built-in

#### 3. **ScrollContainer** (`src/components/ScrollContainer.jsx`)

Root wrapper providing global CSS perspective:

```jsx
<ScrollContainer>
  <Routes>{/* Pages with ScrollSections */}</Routes>
</ScrollContainer>
```

**Features**:

- Establishes 3D coordinate space
- Respects `prefers-reduced-motion`
- Performance-optimized

### File Organization

```
src/
├── utils/
│   ├── scrollMotionSystem.js      ← Core hooks & config
│   └── motionVariants.js          ← Static variants (existing)
├── components/
│   ├── ScrollSection.jsx          ← 🆕 Scroll-driven wrapper
│   ├── ScrollContainer.jsx        ← 🆕 Root 3D container
│   ├── ScrollRevealSection.jsx    ← Static sections (still works)
│   ├── StackedSection.jsx         ← Static sections (still works)
│   └── [other components]
└── pages/
    ├── Home.jsx                   ← Ready to upgrade
    ├── RadioAdvertising.jsx       ← Static (theme fixed)
    ├── BillboardAdvertising.jsx   ← Static (theme fixed)
    ├── SocialMediaAdvertising.jsx ← Static (theme fixed)
    └── BrandDesign.jsx            ← Static (theme fixed)
```

---

## 🎯 How It Works

### The Motion Pipeline

```
User Scrolls
    ↓
ScrollY event (Framer useScroll)
    ↓
Map to scroll range (useTransform)
    ↓
Apply spring smoothing (useSpring)
    ↓
Transform: scale, rotateX, opacity
    ↓
Section recedes into depth
```

### What Happens When User Scrolls

1. **Section Enters Viewport**
   - Starts with initial values
   - Entrance animation plays
   - Ready for scroll control

2. **User Scrolls Down**
   - Scale: 1.0 → 0.92 (8% shrink)
   - RotateX: 0° → -8° (tilts backward)
   - Opacity: 1.0 → 0.4 (fades)
   - Section appears to recede into space

3. **Next Section Replaces It**
   - New section comes forward
   - Enters with entrance animation
   - Cycle repeats

### 3D Transform Details

| Transform      | Initial | Final | Purpose                            |
| -------------- | ------- | ----- | ---------------------------------- |
| **Scale**      | 1.0     | 0.92  | Depth illusion (smaller = farther) |
| **RotateX**    | 0°      | -8°   | Physical tilt (tilted back)        |
| **Opacity**    | 1.0     | 0.4   | Soft falloff (not disappearing)    |
| **TranslateZ** | 0px     | -80px | 3D depth axis                      |

---

## 🚀 Quick Start

### Option 1: Use ScrollSection (Recommended)

```jsx
import ScrollSection from "../components/ScrollSection";

export default function Page() {
  return (
    <div>
      <ScrollSection sectionIndex={0} id="hero">
        <h1>Hero Content</h1>
      </ScrollSection>

      <ScrollSection sectionIndex={1} id="services">
        <h2>Services Content</h2>
      </ScrollSection>

      <ScrollSection sectionIndex={2} id="process">
        <h3>Process Content</h3>
      </ScrollSection>
    </div>
  );
}
```

### Option 2: Custom Scroll Motion

```jsx
import { useScrollDrivenSection } from "../utils/scrollMotionSystem";
import { motion } from "framer-motion";

function CustomSection() {
  const ref = useRef();
  const scrollMotion = useScrollDrivenSection(ref, 1);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollMotion.scale,
        rotateX: scrollMotion.rotateX,
        opacity: scrollMotion.opacity,
      }}
    >
      {/* Content */}
    </motion.section>
  );
}
```

### Option 3: Keep Existing Structure

The motion system is **optional**. Existing pages using `ScrollRevealSection` work perfectly:

```jsx
import ScrollRevealSection from "../components/ScrollRevealSection";

export default function Page() {
  return (
    <ScrollRevealSection className="py-20 bg-white dark:bg-primary-900">
      {/* Static content */}
    </ScrollRevealSection>
  );
}
```

---

## 🎨 Customization

### Adjust Motion Intensity

Edit `src/utils/scrollMotionSystem.js`:

```javascript
// More dramatic
export const SCROLL_MOTION_CONFIG = {
  scaleRange: [1, 0.75], // Shrink more
  rotateXRange: [0, -15], // Tilt more
  translateZRange: [0, -150], // Push back more
  opacityRange: [1, 0.2], // Fade more
};

// More subtle
export const SCROLL_MOTION_CONFIG = {
  scaleRange: [1, 0.98], // Minimal shrink
  rotateXRange: [0, -3], // Slight tilt
  translateZRange: [0, -30], // Minimal push
  opacityRange: [1, 0.7], // Stays more opaque
};
```

### Adjust Spring Physics

```javascript
// Snappy & responsive
spring: {
  stiffness: 150,   // Higher = snappier
  damping: 20,      // Lower = bouncier
}

// Smooth & flowing
spring: {
  stiffness: 80,    // Lower = smoother
  damping: 40,      // Higher = less bounce
}
```

### Theme Colors

All components automatically adapt to dark/light theme:

```jsx
// Orange accents
<div className="bg-accent-dark dark:bg-accent-light">

// Text
<p className="text-gray-900 dark:text-white">

// Borders
<div className="border border-accent-dark/20 dark:border-accent-light/20">
```

---

## 📊 Performance

### Optimizations

✅ **GPU-Accelerated**

- Only `transform` and `opacity` properties
- No layout thrashing
- 60fps on modern browsers

✅ **Spring Physics**

- Reduces jank vs. linear easing
- More natural motion curve
- Configurable smoothness

✅ **Staggered Updates**

- Multiple animations batched
- Efficient re-renders
- Minimal JavaScript

### Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support (15+)
- **Mobile**: Tested on iOS 15+, Android 10+

---

## ♿ Accessibility

### Automatic Handling

```javascript
// ScrollContainer automatically detects
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// If true, disables 3D effects
// Motion-sensitive users get static layout
```

### Manual Override

In component:

```jsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

<ScrollSection enableScrollMotion={!prefersReducedMotion}>
  {/* Content */}
</ScrollSection>
```

---

## 📚 Documentation

### Main Guides

1. **[MOTION_SYSTEM.md](./MOTION_SYSTEM.md)** (Comprehensive)
   - Full architecture explanation
   - All hooks documented
   - Configuration guide
   - Troubleshooting

2. **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)** (Practical)
   - Before/after examples
   - Step-by-step implementation
   - Real usage patterns
   - Best practices

3. **[QUICK_REFERENCE_MOTION.md](./QUICK_REFERENCE_MOTION.md)** (Handy)
   - File structure
   - Quick commands
   - Common issues
   - Configuration examples

---

## 🛠️ Development Workflow

### Creating a New Page with Motion

1. **Create page file**

   ```jsx
   // src/pages/NewPage.jsx
   import ScrollSection from "../components/ScrollSection";
   ```

2. **Add sections**

   ```jsx
   <ScrollSection sectionIndex={0}>Hero</ScrollSection>
   <ScrollSection sectionIndex={1}>Content</ScrollSection>
   ```

3. **Add route**

   ```jsx
   // src/App.jsx
   <Route path="/new-page" element={<NewPage />} />
   ```

4. **Done!** Motion system works automatically

### Toggling Between Static & Motion

```jsx
// Use ScrollSection for motion
<ScrollSection sectionIndex={1}>Content</ScrollSection>

// Use ScrollRevealSection for static
<ScrollRevealSection className="py-20">Content</ScrollRevealSection>

// Both work great together!
```

---

## 🐛 Troubleshooting

### Motion feels janky

- Reduce number of simultaneous sections
- Increase spring `damping`
- Check console for errors

### Motion too subtle

- Increase `scaleRange` difference (e.g., `[1, 0.8]`)
- Increase `rotateXRange` (e.g., `[0, -12]`)
- Reduce spring `stiffness`

### Sections not layering

- Verify `sectionIndex` is incrementing
- Check `ScrollContainer` is wrapping app
- Inspect browser for z-index conflicts

### Motion disabled on some browsers

- Modern browser (Chrome 90+, Safari 15+) required
- Falls back to static on older browsers
- Users with `prefers-reduced-motion` get static layout

---

## 🎓 Learning Resources

### Concepts

- [3D CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS Perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
- [Spring Physics](https://www.framer.com/motion/spring/)

### References

- [Framer Motion Docs](https://www.framer.com/motion/)
- [useScroll Hook](https://www.framer.com/motion/use-scroll/)
- [useTransform Hook](https://www.framer.com/motion/use-transform/)

---

## 📋 Checklist: Upgrade Page to Motion

- [ ] Import `ScrollSection` component
- [ ] Wrap main sections with `<ScrollSection sectionIndex={i}>`
- [ ] Remove `ScrollRevealSection` if converting
- [ ] Add unique `id` to each ScrollSection
- [ ] Verify `sectionIndex` increments (0, 1, 2, 3...)
- [ ] Test scroll behavior in browser
- [ ] Check dark/light theme toggle
- [ ] Test on mobile (scroll smoothness)
- [ ] Verify accessibility (keyboard navigation)
- [ ] Check `prefers-reduced-motion` in browser settings

---

## 🎉 What's Next

### Ready to implement

- Homepage with ScrollSection
- Service pages with scroll motion
- Case studies with parallax

### Future enhancements

- Gesture-driven parallax (mobile)
- Scroll-synced video playback
- Intersection observer optimizations
- WebGL-accelerated sections

---

## 🤝 Questions?

Refer to:

1. **Quick answer**: [QUICK_REFERENCE_MOTION.md](./QUICK_REFERENCE_MOTION.md)
2. **How-to guide**: [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)
3. **Deep dive**: [MOTION_SYSTEM.md](./MOTION_SYSTEM.md)

---

**Motion System Version**: 1.0  
**Last Updated**: January 28, 2026  
**Status**: Production Ready
