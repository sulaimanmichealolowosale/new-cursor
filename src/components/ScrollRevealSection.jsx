'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { scrollFadeUpVariants } from '../utils/motionVariants'

export default function ScrollRevealSection({ children, className = "", enableParallax = false }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "end 0.1"]
    })

    // Subtle parallax effect
    const parallaxY = enableParallax
        ? useTransform(scrollYProgress, [0, 1], [40, 0])
        : 0

    return (
        <motion.section
            ref={ref}
            className={`transition-colors duration-300 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollFadeUpVariants}
            style={enableParallax ? { y: parallaxY } : {}}
        >
            {children}
        </motion.section>
    )
}
