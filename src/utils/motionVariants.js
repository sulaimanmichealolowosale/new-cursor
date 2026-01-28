/**
 * Reusable Framer Motion variants following Havas-inspired principles:
 * - Calm, deliberate motion
 * - Longer durations (400-700ms)
 * - Smooth easing (ease-out, cubic-bezier)
 * - Staggered animations
 * - Editorial confidence
 */

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

// Hero animations
export const heroTitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // custom ease-out
        },
    },
}

export const heroSubtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.15,
        },
    },
}

export const heroCtaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
        },
    },
}

// Section reveal animations
export const sectionFadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Card animations
export const cardStaggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: custom * 0.1,
        },
    }),
}

// Hover animations
export const cardHoverVariants = {
    initial: { y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
    hover: {
        y: -12,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: {
            duration: 0.35,
            ease: [0.23, 1, 0.320, 1], // smooth easeOutQuart
            delay: 0,
        },
    },
}

// Image fade-in animations
export const imageFadeInVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Link hover underline animation
export const linkUnderlineVariants = {
    initial: { scaleX: 0 },
    hover: {
        scaleX: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Text appearance stagger
export const textStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
}

export const textChildVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Smooth slide-in from sides
export const slideInLeftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

export const slideInRightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Icon animations
export const iconHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.08,
        rotate: 0,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Button animations
export const buttonTapVariants = {
    initial: { scale: 1 },
    tap: {
        scale: 0.95,
        transition: { duration: 0.15 },
    },
}

// Scale fade animations
export const scaleFadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// List animations
export const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
}

export const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// ============================================
// SCROLL-DRIVEN ANIMATIONS (Havas-inspired)
// ============================================

// Parallax hero image effect
export const parallaxHeroImageVariants = {
    initial: { y: 0 },
    animate: {
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
        },
    },
}

// Scroll-triggered fade and lift
export const scrollFadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Scroll-triggered scale entrance
export const scrollScaleVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// 3D perspective depth effect
export const depth3DVariants = {
    initial: {
        opacity: 0,
        y: 40,
        z: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        z: 0,
        transition: {
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Hover depth effect (subtle 3D)
export const hoverDepthVariants = {
    initial: { z: 0, rotateX: 0 },
    hover: {
        z: 20,
        rotateX: -2,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Staggered section entry (for multiple elements)
export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Premium line reveal animation
export const lineRevealVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
        },
    },
}

// Badge/pill entrance animation
export const badgeEntranceVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Cinematic text reveal (word by word)
export const wordRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.05,
        },
    }),
}

// Section background fade (for alternating sections)
export const backgroundFadeVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "easeInOut",
        },
    },
}

// Staggered grid animations (perfect for case studies, portfolios)
export const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
}

export const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Premium blur-in effect (text)
export const blurInVariants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Number counter animation base
export const numberCounterVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
}

// Button interactive states
export const buttonInteractiveVariants = {
    rest: {
        y: 0,
        boxShadow: "0 20px 25px -5px rgba(217, 119, 6, 0.3)",
    },
    hover: {
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(217, 119, 6, 0.4)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
    tap: {
        y: 0,
        boxShadow: "0 10px 15px -3px rgba(217, 119, 6, 0.2)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
        },
    },
}

// Section title reveal animation
export const sectionTitleRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Content stagger container
export const contentStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

// Content item animation
export const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

// Full screen section animation
export const fullScreenSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}
