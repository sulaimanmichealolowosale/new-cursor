/**
 * ScrollSection Component
 * Premium full-screen section with scroll-driven 3D depth effect
 * Stacks visually on top of previous sections during scroll
 */

'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollDrivenSection, sectionEntranceVariants } from '@/utils/scrollMotionSystem'

const ScrollSection = ({
    id,
    children,
    className = '',
    background = 'bg-white dark:bg-primary-900',
    sectionIndex = 0,
    enableScrollMotion = true,
}) => {
    const ref = useRef(null)

    // Get scroll-driven transforms if enabled
    const scrollMotion = enableScrollMotion
        ? useScrollDrivenSection(ref, sectionIndex)
        : { scale: 1, rotateX: 0, translateZ: 0, opacity: 1 }

    return (
        <motion.section
            ref={ref}
            id={id}
            initial="initial"
            animate="animate"
            variants={sectionEntranceVariants}
            className={`
        relative w-full min-h-screen flex items-center justify-center
        ${background}
        ${className}
      `}
            style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d',
                zIndex: sectionIndex,
                position: 'relative',
            }}
        >
            {/* 3D Transform Container */}
            <motion.div
                className="w-full h-full flex items-center justify-center"
                style={
                    enableScrollMotion
                        ? {
                            scale: scrollMotion.scale,
                            rotateX: scrollMotion.rotateX,
                            opacity: scrollMotion.opacity,
                            transformPerspective: '1200px',
                            transformStyle: 'preserve-3d',
                        }
                        : {}
                }
            >
                {/* Content Wrapper */}
                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>

                {/* Depth Shadow (subtle indicator of layering) */}
                {enableScrollMotion && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            boxShadow: 'inset 0 -60px 120px rgba(0, 0, 0, 0.15)',
                            opacity: scrollMotion.opacity,
                        }}
                    />
                )}
            </motion.div>
        </motion.section>
    )
}

export default ScrollSection
