# Quick Reference: Premium Motion System

## File Structure

```
src/
├── utils/
│   ├── scrollMotionSystem.js    ← Core motion hooks & config
│   └── motionVariants.js        ← Static animation variants
├── components/
│   ├── ScrollSection.jsx        ← 🆕 Scroll-driven section wrapper
│   ├── ScrollContainer.jsx      ← 🆕 Root 3D perspective container
│   ├── ScrollRevealSection.jsx  ← Static section (legacy)
│   └── StackedSection.jsx       ← Static section (legacy)
└── pages/
    └── Home.jsx                 ← Can be updated to use ScrollSection
```

## Quick Start: Add ScrollSection to a Page

### 1. Import the component

```jsx
import ScrollSection from "../components/ScrollSection";
```

### 2. Wrap content in ScrollSection

```jsx
<ScrollSection
  id="hero"
  sectionIndex={0} // Use incrementing indices
  background="bg-white dark:bg-primary-900"
>
  {/* Your content here */}
</ScrollSection>
```

### 3. Stack multiple sections

```jsx
<div>
  <ScrollSection sectionIndex={0}>Hero</ScrollSection>
  <ScrollSection sectionIndex={1}>Services</ScrollSection>
  <ScrollSection sectionIndex={2}>Process</ScrollSection>
  <ScrollSection sectionIndex={3}>CTA</ScrollSection>
</div>
```

## Core Hooks

### useScrollDrivenSection

```javascript
import { useScrollDrivenSection } from '../utils/scrollMotionSystem'

const ref = useRef()
const motion = useScrollDrivenSection(ref, sectionIndex)

// Returns: { scale, rotateX, translateZ, opacity }
<motion.div style={{
  scale: motion.scale,
  rotateX: motion.rotateX,
  opacity: motion.opacity
}} />
```

### useParallaxScroll

```javascript
import { useParallaxScroll } from '../utils/scrollMotionSystem'

const ref = useRef()
const y = useParallaxScroll(ref, 0.3)  // intensity: 0-1

<motion.img style={{ y }} />
```

## Motion Config

**File**: `src/utils/scrollMotionSystem.js`

```javascript
SCROLL_MOTION_CONFIG = {
  scaleRange: [1, 0.92], // 1.0 → 0.92
  rotateXRange: [0, -8], // 0deg → -8deg
  translateZRange: [0, -80], // 0px → -80px
  opacityRange: [1, 0.4], // 1.0 → 0.4
  spring: {
    type: "spring",
    stiffness: 100, // 0-300 (snappier)
    damping: 30, // 0-100 (bouncier)
    mass: 1, // 0.1-1 (lighter)
  },
};
```

## Entrance Animations

```javascript
import {
  contentEntranceVariants,
  staggerContainerVariants,
} from "../utils/scrollMotionSystem";

// Container
<motion.div
  variants={staggerContainerVariants}
  initial="initial"
  animate="animate"
>
  {/* Children stagger automatically */}
  <motion.h1 variants={contentEntranceVariants} />
  <motion.p variants={contentEntranceVariants} />
</motion.div>;
```

## Theme-Aware Styling

```jsx
// Background adapts to theme
<ScrollSection background="bg-white dark:bg-primary-900">

// Text colors
<h2 className="text-gray-900 dark:text-white">

// Accents
<div className="bg-accent-dark dark:bg-accent-light">

// Borders
<div className="border border-accent-dark/20 dark:border-accent-light/20">

// Gradients
<div className="bg-gradient-to-br from-accent-dark to-orange-700 dark:from-accent-light dark:to-orange-400">
```

## Component Props

### ScrollSection

```jsx
<ScrollSection
  id="services" // DOM id
  sectionIndex={1} // Index (required)
  background="bg-white dark:bg-primary-900" // Background class
  enableScrollMotion={true} // Enable 3D effect (default: true)
  className="custom-class" // Additional classes
>
  {children}
</ScrollSection>
```

### ScrollContainer

```jsx
<ScrollContainer className="custom-class">{children}</ScrollContainer>
```

## Troubleshooting

| Issue                | Solution                                      |
| -------------------- | --------------------------------------------- |
| Motion too subtle    | Increase `scaleRange` diff (e.g., `[1, 0.8]`) |
| Motion too fast      | Increase `stiffness` (e.g., `150`)            |
| Motion feels bouncy  | Increase `damping` (e.g., `40`)               |
| Sections don't layer | Verify `sectionIndex` is incrementing         |
| No 3D effect         | Check `ScrollContainer` wrapping app          |
| Motion disabled      | User has `prefers-reduced-motion` enabled     |

## Performance Tips

✅ **DO**

- Animate only `transform` and `opacity`
- Use `useScrollDrivenSection` for multiple transforms
- Keep spring values consistent
- Batch updates with `motion.div`

❌ **DON'T**

- Animate `width`, `height`, `top`, `left`
- Animate colors or shadows during scroll
- Use too many simultaneous transforms
- Disable `transformStyle: preserve-3d`

## Configuration Examples

### Dramatic Stacking

```javascript
scaleRange: [1, 0.75],
rotateXRange: [0, -15],
translateZRange: [0, -150],
opacityRange: [1, 0.2],
```

### Subtle Motion

```javascript
scaleRange: [1, 0.98],
rotateXRange: [0, -3],
translateZRange: [0, -30],
opacityRange: [1, 0.7],
```

### Bouncy Feel

```javascript
spring: {
  stiffness: 80,
  damping: 20,
  mass: 1.2,
}
```

## CSS Perspective Reference

```css
/* Root container (ScrollContainer) */
perspective: 1200px;
transform-style: preserve-3d;

/* Child sections (ScrollSection) */
transform-style: preserve-3d;

/* Enable 3D transforms */
will-change: transform;
```

## Links

- [Full Motion System Docs](./MOTION_SYSTEM.md)
- [Implementation Guide](./IMPLEMENTATION_GUIDE.md)
- [Framer Motion Docs](https://www.framer.com/motion/)
