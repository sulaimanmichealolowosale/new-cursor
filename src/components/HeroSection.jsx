'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { placeholderImages } from '../utils/ImageUtils'
import { heroTitleVariants, heroSubtitleVariants, heroCtaVariants, imageFadeInVariants } from '../utils/motionVariants'

export default function HeroSection({ title, subtitle, cta, bgImage = placeholderImages.hero }) {
    const { isDark } = useTheme()
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end center"]
    })

    // Parallax effect on hero image
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])

    // Fade out on scroll
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

    return (
        <section ref={ref} className="relative min-h-[700px] flex items-center justify-center py-24 overflow-hidden bg-gradient-to-br from-white to-primary-50 dark:from-primary-900 dark:to-primary-800 transition-colors duration-300">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ y: imageY }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-primary-900 z-10"></div>
                <img
                    src={bgImage}
                    alt="Hero background"
                    className="w-full h-full object-cover opacity-15 dark:opacity-8"
                    loading="lazy"
                />
            </motion.div>

            {/* Subtle Accent Orbs */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0">
                <div className="absolute top-10 -left-48 w-96 h-96 bg-accent-dark rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute -bottom-32 right-32 w-96 h-96 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <motion.div
                className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20"
                style={{ opacity: contentOpacity }}
            >
                <motion.h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-900 dark:text-white mb-8 leading-tight transition-colors tracking-tight"
                    variants={heroTitleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl lg:text-2xl text-primary-600 dark:text-primary-300 mb-12 max-w-3xl mx-auto transition-colors leading-relaxed font-light"
                    variants={heroSubtitleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={heroCtaVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {cta && (
                        <>
                            <motion.button
                                onClick={() => window.location.href = '#contact'}
                                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.320, 1] }}
                                className="px-8 py-4 bg-accent-dark dark:bg-accent-light text-white dark:text-primary-900 font-semibold rounded-lg hover:bg-accent-dark/90 dark:hover:bg-accent-light/90 transition-all duration-500 shadow-lg hover:shadow-xl"
                            >
                                {cta.primary || "Book a Free Strategy Call"}
                            </motion.button>
                            <motion.button
                                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.320, 1] }}
                                className="px-8 py-4 bg-white dark:bg-primary-800 text-accent-dark dark:text-accent-light font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-700 transition-all duration-500 shadow-lg hover:shadow-xl border-2 border-accent-dark dark:border-accent-light"
                            >
                                {cta.secondary || "Chat on WhatsApp"}
                            </motion.button>
                        </>
                    )}
                </motion.div>
            </motion.div>
        </section >
    )
}
