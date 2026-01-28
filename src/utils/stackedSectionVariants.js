/**
 * Stacked Section Animation System
 * Scroll-driven 3D layering with depth illusion
 * Inspired by premium agency experiences (Havas, Ogilvy)
 */

import { useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * Stack Reveal Variant - Section slides in from bottom with scale/opacity
 * Used for initial section entrance
 */
export const stackRevealVariants = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

/**
 * Section Depth Variant - 3D perspective with z-axis translation
 * Creates illusion of sections stacking in 3D space
 */
export const sectionDepthVariants = {
    hidden: {
        opacity: 0,
        scale: 0.92,
        rotateX: 15,
        z: -100,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        z: 0,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
    exit: {
        opacity: 0.3,
        scale: 0.98,
        rotateX: -8,
        z: -50,
        transition: {
            duration: 0.6,
        },
    },
}

/**
 * Card Hover 3D Variant - Restrained 3D tilt on hover
 */
export const cardHover3DVariants = {
    rest: {
        rotateX: 0,
        rotateY: 0,
        z: 0,
    },
    hover: {
        scale: 1.02,
        rotateX: -5,
        rotateY: 0,
        z: 30,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
        },
    },
}

/**
 * Section Title Reveal - Text enters with blur and lift
 */
export const sectionTitleRevealVariants = {
    hidden: {
        opacity: 0,
        filter: 'blur(8px)',
        y: 30,
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

/**
 * Content Stagger Container - Parent for staggered children
 */
export const contentStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

/**
 * Content Item Variant - Child items for stagger
 */
export const contentItemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

/**
 * Image Parallax Variant - Subtle background parallax on scroll
 */
export const imageParallaxVariants = {
    hidden: {
        opacity: 0,
        scale: 1.05,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
        },
    },
}

/**
 * Button Interactive Variant - CTA with 3D depth
 */
export const buttonInteractiveVariants = {
    rest: {
        y: 0,
        boxShadow: '0 10px 30px rgba(217, 119, 6, 0.2)',
    },
    hover: {
        y: -2,
        boxShadow: '0 20px 40px rgba(217, 119, 6, 0.3)',
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
        },
    },
    tap: {
        y: 2,
        boxShadow: '0 5px 15px rgba(217, 119, 6, 0.15)',
    },
}

/**
 * Badge Entrance Variant - Small element reveal
 */
export const badgeEntranceVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 10,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

/**
 * Line Reveal Variant - Horizontal accent line
 */
export const lineRevealVariants = {
    hidden: {
        scaleX: 0,
        originX: 0,
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

/**
 * Grid Stagger Container - Multi-item grid parent
 */
export const gridStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
}

/**
 * Grid Item Variant - Individual grid item with perspective
 */
export const gridItemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
        rotateX: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

/**
 * Full Screen Section Variant - Entire 100vh section reveal
 */
export const fullScreenSectionVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

/**
 * Scroll-Driven Section Transform Hook
 * Controls scale, rotateX, and opacity based on scroll position
 * @param {React.RefObject} ref - Reference to section element
 * @param {number} startOffset - Start offset in pixels from viewport
 * @returns {Object} motion values for transforms
 */
export const useScrollDrivenSection = (ref) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end center'],
    })

    // Scale: 1 when not in view, 1.05 when at bottom
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02])

    // RotateX: 0° when in view, -5° when scrolled past
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5])

    // Opacity: 1 when in view, 0.5 when scrolled past
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.5])

    // Z-depth: moves forward then back
    const z = useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, -30])

    // Apply spring physics for smooth motion
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
    const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
    const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
    const smoothZ = useSpring(z, { stiffness: 80, damping: 25 })

    return {
        scale: smoothScale,
        rotateX: smoothRotateX,
        opacity: smoothOpacity,
        z: smoothZ,
    }
}

/**
 * Parallax Scroll Hook
 * Creates parallax effect based on scroll position
 * @param {React.RefObject} ref - Reference to parallax element
 * @param {number} speed - Parallax speed multiplier (0.5-2)
 * @returns {Object} motion value for Y transform
 */
export const useParallaxScroll = (ref, speed = 0.5) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
    return useSpring(y, { stiffness: 100, damping: 30 })
}

/**
 * Section Entry Detection Hook
 * Detects when section enters/exits viewport
 * @param {React.RefObject} ref - Reference to section
 * @returns {Object} scroll progress and in-view status
 */
export const useSectionEntry = (ref) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })

    // When scrollYProgress > 0.5, section is in view
    const inView = useTransform(scrollYProgress, [0, 0.5], [false, true])

    return { scrollYProgress, inView }
}

/**
 * Depth Scale Hook
 * Creates depth illusion by scaling based on scroll position
 * @param {React.RefObject} ref - Reference to element
 * @returns {Object} scale value for depth effect
 */
export const useDepthScale = (ref) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95])
    return useSpring(scale, { stiffness: 100, damping: 30 })
}

export default {
    stackRevealVariants,
    sectionDepthVariants,
    cardHover3DVariants,
    sectionTitleRevealVariants,
    contentStaggerVariants,
    contentItemVariants,
    imageParallaxVariants,
    buttonInteractiveVariants,
    badgeEntranceVariants,
    lineRevealVariants,
    gridStaggerVariants,
    gridItemVariants,
    fullScreenSectionVariants,
    useScrollDrivenSection,
    useParallaxScroll,
    useSectionEntry,
    useDepthScale,
}
