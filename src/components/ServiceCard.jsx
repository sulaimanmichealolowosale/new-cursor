'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { placeholderImages } from '@/utils/ImageUtils'
import { cardHoverVariants, imageFadeInVariants, hoverDepthVariants } from '@/utils/motionVariants'

export default function ServiceCard({ icon: Icon, title, description, link, image }) {
    const { isDark } = useTheme()
    const [isZoomed, setIsZoomed] = useState(false)

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    // Select image based on title or use default
    const getImage = () => {
        if (image) return image
        const imageMap = {
            'Radio Advertising': placeholderImages.radioAdvertising,
            'Billboard Advertising': placeholderImages.billboardAdvertising,
            'Social Media Advertising': placeholderImages.socialMediaAdvertising,
            'Brand Design': placeholderImages.brandDesign,
        }
        return imageMap[title] || placeholderImages.hero
    }

    const imgSrc = getImage()

    return (
        <>
            <motion.div
                initial="initial"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                variants={cardHoverVariants}
                whileHover="hover"
                style={{ perspective: 1200 }}
                className="group relative h-full flex flex-col bg-white dark:bg-primary-800 rounded-xl border border-primary-100 dark:border-primary-700 shadow-sm dark:shadow-md hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                onHoverStart={(e) => { }}
                onHoverEnd={(e) => { }}
            >
                {/* Image Section with Editorial Treatment */}
                <motion.div
                    onClick={() => setIsZoomed(true)}
                    className="w-full h-52 overflow-hidden bg-primary-50 dark:bg-primary-700 cursor-zoom-in relative"
                    style={{ cursor: 'zoom-in' }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.320, 1] }}
                >
                    <motion.img
                        src={imgSrc}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-[800ms] ease-out pointer-events-none"
                        variants={imageFadeInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    />
                    {/* Subtle Overlay on Hover */}
                    <motion.div
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"
                        whileHover={{ opacity: 1 }}
                    ></motion.div>
                </motion.div>

                <div className="relative z-10 p-7 flex flex-col flex-grow">
                    {Icon && (
                        <motion.div
                            className="mb-5 inline-block p-3 bg-accent-light/20 dark:bg-accent-dark/20 rounded-lg group-hover:bg-accent-dark dark:group-hover:bg-accent-light transition-colors duration-500"
                            whileHover={{ scale: 1.12, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0 }}
                        >
                            <Icon className="w-6 h-6 text-accent-light dark:text-accent-dark group-hover:text-white transition-colors duration-500" />
                        </motion.div>
                    )}

                    <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-3 group-hover:text-accent-dark dark:group-hover:text-accent-light transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="text-sm text-primary-600 dark:text-primary-300 mb-6 leading-relaxed flex-grow">
                        {description}
                    </p>

                    {link && (
                        <motion.a
                            href={link}
                            className="inline-flex items-center gap-2 text-accent-dark dark:text-accent-light font-semibold text-sm hover:text-accent-dark/80 dark:hover:text-accent-light/80 transition-colors duration-500"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0 }}
                        >
                            Learn More
                            <motion.svg
                                className="w-4 h-4 transition-transform duration-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.4, delay: 0 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                        </motion.a>
                    )}
                </div>
            </motion.div>

            {/* Image Zoom Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => setIsZoomed(false)}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl max-h-[80vh] w-full h-full"
                        >
                            <img
                                src={imgSrc}
                                alt={title}
                                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                            />

                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.1, delay: 0 }}
                                onClick={() => setIsZoomed(false)}
                                className="absolute top-4 right-4 p-3 rounded-full bg-white/20 hover:bg-white/40 dark:bg-black/40 dark:hover:bg-black/60 text-white backdrop-blur-md transition-colors duration-200"
                                aria-label="Close zoom"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {/* Title Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05, duration: 0.2 }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl"
                            >
                                <h3 className="text-2xl font-bold text-white">{title}</h3>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
