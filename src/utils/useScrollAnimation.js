import { useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

/**
 * useScrollAnimation Hook
 * Provides scroll-based animation utilities following Havas.com principles
 */

export const useScrollAnimation = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 0.2"]
    })

    // Smooth spring-based opacity
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]),
        { stiffness: 100, damping: 30 }
    )

    // Smooth Y translation
    const y = useSpring(
        useTransform(scrollYProgress, [0, 1], [40, 0]),
        { stiffness: 100, damping: 30 }
    )

    return { ref, opacity, y, scrollYProgress }
}

/**
 * useParallaxScroll Hook
 * Creates parallax effect for images and backgrounds
 * @param {number} speed - Parallax intensity (0.5 to 2)
 */
export const useParallaxScroll = (speed = 0.5) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100 * speed])

    return { ref, yParallax }
}

/**
 * usePerspectiveScroll Hook
 * Creates 3D perspective depth effect on scroll
 */
export const usePerspectiveScroll = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.6", "end 0.4"]
    })

    const scale = useSpring(
        useTransform(scrollYProgress, [0, 1], [0.92, 1]),
        { stiffness: 100, damping: 30 }
    )

    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [8, 0]),
        { stiffness: 100, damping: 30 }
    )

    return { ref, scale, rotateX }
}

/**
 * useRevealOnScroll Hook
 * Reveals content smoothly when it enters viewport
 * @param {object} config - { threshold, delay }
 */
export const useRevealOnScroll = (config = { threshold: 0.3, delay: 0 }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.25"]
    })

    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1]),
        { stiffness: 80, damping: 25 }
    )

    const y = useSpring(
        useTransform(scrollYProgress, [0, 1], [60, 0]),
        { stiffness: 80, damping: 25 }
    )

    return { ref, opacity, y }
}

/**
 * useScrollVelocity Hook
 * Detects scroll velocity for dynamic effects
 */
export const useScrollVelocity = () => {
    const { scrollY } = useScroll()

    return { scrollY }
}

/**
 * useStaggeredFadeIn Hook
 * Staggered fade-in for multiple elements
 * @param {number} itemCount - Number of items to stagger
 */
export const useStaggeredFadeIn = (itemCount) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    return { containerVariants, itemVariants }
}
