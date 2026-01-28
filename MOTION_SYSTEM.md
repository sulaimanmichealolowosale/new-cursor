# Premium Scroll-Driven Motion System

## Inventio Inc - Motion Design Architecture

### Overview

This document outlines the scroll-linked, 3D depth motion system powering Inventio Inc's premium agency website. All animations are **scroll-driven** using Framer Motion's `useScroll`, `useTransform`, and `useSpring`.

---

## Core Principles

### Motion Philosophy

- **Scroll-driven**: Motion is tied directly to scroll position, never autoplay
- **3D Spatial**: Sections feel like physical cards in space, with proper depth layering
- **Performance-first**: Only animate `transform` and `opacity` for GPU acceleration
- **Accessibility**: Respects `prefers-reduced-motion` system preference
- **Agency-grade**: Intentional, purposeful motion that enhances storytelling

### Design Targets

- Scale: 1.0 (full) → 0.92 (receding)
- Rotation: 0deg → -8deg (tilted back on exit)
- Depth: 0px → -80px (pushed back in 3D space)
- Opacity: 1.0 (opaque) → 0.4 (faded)

---

## Architecture

### 1. Scroll Motion System Module

**File**: `src/utils/scrollMotionSystem.js`

#### Configuration Object

```javascript
SCROLL_MOTION_CONFIG = {
  scaleRange: [1, 0.92], // Initial → Final scale
  rotateXRange: [0, -8], // Initial → Final rotation
  translateZRange: [0, -80], // Initial → Final depth
  opacityRange: [1, 0.4], // Initial → Final opacity
  spring: {
    // Physics-based smoothing
    type: "spring",
    stiffness: 100,
    damping: 30,
    mass: 1,
  },
};
```

#### Hooks Provided

##### `useScrollDrivenSection(ref, sectionIndex, triggerOffset)`

Maps scroll progress to 3D transforms for a section.

```javascript
const scrollMotion = useScrollDrivenSection(ref, 0); // Section index 0
// Returns: { scale, rotateX, translateZ, opacity } (MotionValues)
```

**Usage in ScrollSection component**:

```jsx
<motion.div
  style={{
    scale: scrollMotion.scale,
    rotateX: scrollMotion.rotateX,
    opacity: scrollMotion.opacity,
  }}
>
  {children}
</motion.div>
```

##### `useParallaxScroll(ref, intensity)`

Creates subtle parallax effect for nested elements (depth imagery).

```javascript
const y = useParallaxScroll(ref, 0.3); // 30% intensity
```

##### `useDepthScale(sectionIndex, cardIndex)`

Staggered scale for cards within a section (depth layering).

```javascript
const scale = useDepthScale(0, 1); // Section 0, Card 1
```

---

### 2. ScrollSection Component

**File**: `src/components/ScrollSection.jsx`

Premium full-screen section with automatic scroll-driven motion.

#### Props

```jsx
<ScrollSection
  id="services" // DOM id
  sectionIndex={0} // Index for stagger
  background="bg-white dark:bg-primary-900"
  enableScrollMotion={true} // Toggle scroll effect
  className="custom-class"
>
  {children}
</ScrollSection>
```

#### Features

- Automatic entrance animation before scroll takes over
- 3D perspective with `transformStyle: preserve-3d`
- Subtle inset shadow for depth indication
- Accessibility-aware (respects `prefers-reduced-motion`)
- Theme-aware backgrounds (dark/light)

---

### 3. ScrollContainer Component

**File**: `src/components/ScrollContainer.jsx`

Root container applying global 3D perspective.

#### Features

- Establishes CSS `perspective: 1200px`
- Sets `transformStyle: preserve-3d` for 3D stacking
- Respects `prefers-reduced-motion` automatically
- Minimal performance overhead

---

## Usage Pattern

### Basic Home Page with Scroll Motion

```jsx
import ScrollSection from "../components/ScrollSection";
import {
  contentEntranceVariants,
  staggerContainerVariants,
} from "../utils/scrollMotionSystem";

export default function Home() {
  return (
    <div>
      {/* Hero - Section 0 */}
      <ScrollSection
        id="hero"
        sectionIndex={0}
        background="bg-gradient-to-b from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900"
      >
        <motion.div
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1 variants={contentEntranceVariants}>
            Premium Agency Motion
          </motion.h1>
          <motion.p variants={contentEntranceVariants}>
            Scroll-driven 3D depth effects
          </motion.p>
        </motion.div>
      </ScrollSection>

      {/* Services - Section 1 */}
      <ScrollSection
        id="services"
        sectionIndex={1}
        background="bg-white dark:bg-primary-900"
      >
        <div className="space-y-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          {/* Service cards here */}
        </div>
      </ScrollSection>

      {/* About - Section 2 */}
      <ScrollSection
        id="about"
        sectionIndex={2}
        background="bg-gray-50 dark:bg-primary-800"
      >
        {/* About content */}
      </ScrollSection>
    </div>
  );
}
```

### Advanced: Custom Scroll Motion

```jsx
import {
  useScrollDrivenSection,
  useParallaxScroll,
} from "../utils/scrollMotionSystem";
import { motion } from "framer-motion";

function CustomSection() {
  const ref = useRef(null);
  const scrollMotion = useScrollDrivenSection(ref, 2); // Section index 2
  const parallax = useParallaxScroll(ref, 0.5);

  return (
    <section ref={ref} style={{ perspective: "1200px" }}>
      <motion.div
        style={{
          scale: scrollMotion.scale,
          rotateX: scrollMotion.rotateX,
          opacity: scrollMotion.opacity,
        }}
      >
        {/* Main content */}
      </motion.div>

      <motion.img
        src="background.jpg"
        style={{ y: parallax }}
        className="fixed inset-0 -z-10 object-cover"
      />
    </section>
  );
}
```

---

## Motion Transforms Explained

### 1. Scale (Depth Illusion)

- **Initial**: `1.0` (full size, at viewer)
- **Final**: `0.92` (-8% scale, receding)
- Creates illusion of sections moving away in 3D space

### 2. RotateX (Tilt on Exit)

- **Initial**: `0deg` (facing viewer)
- **Final**: `-8deg` (tilted backward)
- Simulates physical card being tilted back

### 3. TranslateZ (3D Depth)

- **Initial**: `0px` (at screen plane)
- **Final**: `-80px` (pushed back in 3D)
- Works with CSS perspective to create depth
- Requires `transformStyle: preserve-3d` parent

### 4. Opacity (Soft Falloff)

- **Initial**: `1.0` (fully opaque)
- **Final**: `0.4` (semi-transparent)
- Prevents sections from completely disappearing
- Creates visual connection between layers

---

## Spring Physics

All motion values use spring-based smoothing for natural, organic feel:

```javascript
spring: {
  type: 'spring',
  stiffness: 100,    // How "snappy" (0-300)
  damping: 30,       // How much "wobble" (0-100)
  mass: 1,           // Weight (0.1-1.0)
}
```

- **Stiffness 100**: Moderate responsiveness, not too bouncy
- **Damping 30**: Slight overshoot, feels alive
- **Mass 1**: Consistent energy throughout animation

---

## Performance Considerations

### ✅ Optimized (GPU-Accelerated)

- Only `transform` properties animated (`scale`, `rotateX`, `translateZ`)
- Only `opacity` animated (no color, size, or position changes)
- Spring physics reduce jank vs. linear easing
- Will-change hints on containers

### ❌ Avoid

- Animating `width`, `height`, `top`, `left`, etc.
- Animating colors or shadows
- Too many simultaneous transforms (stagger instead)
- Heavy blur or filter effects during scroll

---

## Accessibility

### Respect `prefers-reduced-motion`

```javascript
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
  // Apply scroll motion
} else {
  // Use static alternative
}
```

**ScrollContainer and ScrollSection handle this automatically.**

---

## Customization

### Adjust Motion Range

Edit `SCROLL_MOTION_CONFIG` in `src/utils/scrollMotionSystem.js`:

```javascript
// More dramatic scale shift
scaleRange: [1, 0.85]; // 15% shrink instead of 8%

// Stronger rotation
rotateXRange: [0, -15]; // -15deg instead of -8deg

// More depth
translateZRange: [0, -150]; // Pushed back further

// Slower fade
opacityRange: [1, 0.6]; // Stays more opaque
```

### Adjust Spring Physics

```javascript
spring: {
  stiffness: 150,   // More snappy
  damping: 20,      // More bouncy
  mass: 0.5,        // Lighter feel
}
```

---

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **3D Transforms**: Full support for `transform-style: preserve-3d`
- **CSS Perspective**: Full support
- **Framer Motion**: Handles fallbacks automatically

---

## Future Enhancements

### Planned

- Gesture-driven motion for mobile (swipe-to-scroll parallax)
- Scroll-trigger video playback
- Magnetic button interactions
- Depth-based focus management

### Possible

- WebGL-accelerated 3D sections
- Scroll-synced sound design
- Intersection observer optimizations
- Dynamic viewport-based adjustments

---

## Troubleshooting

### Motion feels janky

- Check `stiffness` and `damping` values
- Reduce number of simultaneous animations
- Ensure only `transform` and `opacity` are animated

### Sections don't stack properly

- Verify `transformStyle: preserve-3d` on parent
- Check `perspective: 1200px` on container
- Ensure z-index ordering is correct

### Motion too subtle

- Increase `scaleRange` difference (e.g., `[1, 0.8]`)
- Increase `rotateXRange` (e.g., `[0, -15]`)
- Reduce `stiffness` for slower response

---

## References

- [Framer Motion useScroll](https://www.framer.com/motion/use-scroll/)
- [Framer Motion useTransform](https://www.framer.com/motion/use-transform/)
- [MDN: transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)
- [MDN: perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
