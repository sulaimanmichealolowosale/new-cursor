import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { placeholderImages } from '../utils/ImageUtils'

export default function HeroSection({ title, subtitle, cta, bgImage = placeholderImages.hero }) {
    const { isDark } = useTheme()

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
        }
    }

    const ctaVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
        }
    }

    return (
        <section className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 transition-colors duration-300">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
                <img
                    src={bgImage}
                    alt="Hero background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 -left-40 w-80 h-80 bg-accent-dark rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute -bottom-8 right-40 w-80 h-80 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 dark:text-white mb-6 leading-tight transition-colors"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-primary-700 dark:text-primary-200 mb-8 max-w-2xl mx-auto transition-colors"
                    variants={subtitleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={ctaVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {cta && (
                        <>
                            <button
                                onClick={() => window.location.href = '#contact'}
                                className="px-8 py-4 bg-accent-dark text-white font-semibold rounded-lg hover:bg-accent-dark/90 transition transform hover:scale-105 active:scale-95 shadow-medium"
                            >
                                {cta.primary || "Book a Free Strategy Call"}
                            </button>
                            <button
                                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                                className="px-8 py-4 bg-white dark:bg-primary-800 text-accent-dark dark:text-accent-light font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-700 transition transform hover:scale-105 active:scale-95 shadow-medium border-2 border-accent-dark dark:border-accent-light"
                            >
                                {cta.secondary || "Chat on WhatsApp"}
                            </button>
                        </>
                    )}
                </motion.div>
            </div>
        </section >
    )
}
