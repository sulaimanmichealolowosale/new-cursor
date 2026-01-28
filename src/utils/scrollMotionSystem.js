/**
 * Premium Scroll-Driven Motion System for Inventio Inc
 * Havas-inspired, scroll-linked 3D depth and spatial layering
 * Scroll drives all transforms: scale, rotateX, translateZ, opacity
 */

import { useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useMemo } from 'react'

/**
 * Configuration for scroll-linked transforms
 * Adjustable ranges and easing for each section
 */
export const SCROLL_MOTION_CONFIG = {
    // Scale range: 1 (full) → 0.92 (receding)
    scaleRange: [1, 0.92],

    // RotateX range: 0deg → -8deg (tilted back)
    rotateXRange: [0, -8],

    // TranslateZ range: 0px → -80px (pushed back in 3D)
    translateZRange: [0, -80],

    // Opacity range: 1 (opaque) → 0.4 (faded)
    opacityRange: [1, 0.4],

    // Spring physics for smooth motion
    spring: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        mass: 1,
    },
}

/**
 * useScrollDrivenSection Hook
 * Maps scroll progress to 3D transforms for a specific section
 * 
 * @param {React.MutableRefObject} ref - Section DOM ref
 * @param {number} sectionIndex - Index for stagger offset
 * @param {number} triggerOffset - Scroll offset to start animation
 * @returns {Object} Motion values { scale, rotateX, translateZ, opacity }
 */
export function useScrollDrivenSection(ref, sectionIndex = 0, triggerOffset = 0) {
    const { scrollY } = useScroll()

    // Calculate scroll range for this section
    // Each section has ~100vh viewport height
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
    const sectionStart = triggerOffset + sectionIndex * viewportHeight
    const sectionEnd = sectionStart + viewportHeight

    // Map scroll progress to motion values
    const scale = useTransform(
        scrollY,
        [sectionStart, sectionEnd],
        SCROLL_MOTION_CONFIG.scaleRange,
        { clamp: true }
    )

    const rotateX = useTransform(
        scrollY,
        [sectionStart, sectionEnd],
        SCROLL_MOTION_CONFIG.rotateXRange,
        { clamp: true }
    )

    const translateZ = useTransform(
        scrollY,
        [sectionStart, sectionEnd],
        SCROLL_MOTION_CONFIG.translateZRange,
        { clamp: true }
    )

    const opacity = useTransform(
        scrollY,
        [sectionStart, sectionEnd],
        SCROLL_MOTION_CONFIG.opacityRange,
        { clamp: true }
    )

    // Apply spring smoothing to all values
    const springConfig = SCROLL_MOTION_CONFIG.spring

    return {
        scale: useSpring(scale, springConfig),
        rotateX: useSpring(rotateX, springConfig),
        translateZ: useSpring(translateZ, springConfig),
        opacity: useSpring(opacity, springConfig),
    }
}

/**
 * useParallaxScroll Hook
 * Creates subtle parallax effect for nested elements
 * 
 * @param {React.MutableRefObject} ref - Element DOM ref
 * @param {number} intensity - Parallax intensity (0.1 to 1.0)
 * @returns {Object} Motion value { y }
 */
export function useParallaxScroll(ref, intensity = 0.3) {
    const { scrollY } = useScroll()

    const y = useTransform(scrollY, (latest) => {
        return latest * intensity * -1
    })

    return useSpring(y, SCROLL_MOTION_CONFIG.spring)
}

/**
 * useDepthScale Hook
 * Maps scroll to a depth-based scale for nested cards
 * 
 * @param {number} sectionIndex - Section index
 * @param {number} cardIndex - Card index within section
 * @returns {Object} Motion value { scale }
 */
export function useDepthScale(sectionIndex = 0, cardIndex = 0) {
    const { scrollY } = useScroll()
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
    const sectionStart = sectionIndex * viewportHeight
    const sectionEnd = sectionStart + viewportHeight

    // Stagger card scales based on position
    const cardDelay = cardIndex * 20
    const scaleRange = [1 - cardIndex * 0.02, 0.95 - cardIndex * 0.05]

    const scale = useTransform(
        scrollY,
        [sectionStart - cardDelay, sectionEnd - cardDelay],
        scaleRange,
        { clamp: true }
    )

    return useSpring(scale, SCROLL_MOTION_CONFIG.spring)
}

/**
 * Preset animation variants for sections
 * Use these for initial entrance before scroll takes over
 */
export const sectionEntranceVariants = {
    initial: { opacity: 0, scale: 0.95, rotateX: 15 },
    animate: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

export const contentEntranceVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

export const staggerContainerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
}

/**
 * calculateSectionOffset
 * Utility to calculate scroll offset for a section index
 * 
 * @param {number} sectionIndex - 0-based section index
 * @param {number} headerHeight - Height of fixed header
 * @returns {number} Scroll offset in pixels
 */
export function calculateSectionOffset(sectionIndex = 0, headerHeight = 0) {
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
    return sectionIndex * viewportHeight + headerHeight
}
