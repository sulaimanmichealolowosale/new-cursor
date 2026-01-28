/**
 * ScrollContainer Component
 * Root container for scroll-driven 3D motion system
 * Applies perspective, transformStyle, and sets up scroll context
 * 
 * Features:
 * - CSS perspective for 3D depth
 * - Smooth GPU-accelerated rendering
 * - Accessibility: respects prefers-reduced-motion
 */

'use client'

import React, { useEffect, useState } from 'react'

const ScrollContainer = ({ children, className = '' }) => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        // Check if user prefers reduced motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)

        const handleChange = (e) => setPrefersReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    return (
        <div
            className={`relative w-full ${className}`}
            style={{
                perspective: prefersReducedMotion ? 'none' : '1200px',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                overflow: 'hidden',
            }}
        >
            {children}
        </div>
    )
}

export default ScrollContainer

