/**
 * StackedSection Component
 * Full-screen 100vh section with 3D stacking effect
 * Automatically applies scroll-driven transforms and layering
 */

'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import {
    sectionDepthVariants,
    useScrollDrivenSection,
} from '../utils/stackedSectionVariants'

const StackedSection = ({
    id,
    children,
    className = '',
    background = 'bg-primary-900',
    enableScroll3D = true,
    zIndex = 0,
    sectionIndex = 0,
}) => {
    const ref = useRef(null)

    // Get scroll-driven transforms if 3D is enabled
    const scrollTransforms = enableScroll3D
        ? useScrollDrivenSection(ref)
        : { scale: 1, rotateX: 0, opacity: 1, z: 0 }

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`
                relative w-full h-screen overflow-hidden
                flex items-center justify-center
                ${background}
                ${className}
            `}
            style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d',
                zIndex: zIndex || sectionIndex,
                position: 'relative',
            }}
            variants={enableScroll3D ? sectionDepthVariants : {}}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.25 }}
        >
            {/* 3D Transform Container */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={
                    enableScroll3D
                        ? {
                            scale: scrollTransforms.scale,
                            rotateX: scrollTransforms.rotateX,
                            opacity: scrollTransforms.opacity,
                        }
                        : {}
                }
            >
                {/* Content Wrapper */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {children}
                </div>

                {/* Subtle Bottom Shadow for Depth */}
                <div
                    className="
                        absolute bottom-0 left-0 right-0 h-32
                        bg-gradient-to-b from-transparent
                        to-primary-950 pointer-events-none
                        opacity-50
                    "
                    style={{
                        boxShadow:
                            'inset 0 -40px 80px rgba(0, 0, 0, 0.3)',
                    }}
                />
            </motion.div>
        </motion.section>
    )
}

export default StackedSection
