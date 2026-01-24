import { motion } from 'framer-motion'

export default function HeroSection({ title, subtitle, cta, bgImage }) {
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
        <section
            className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(0, 102, 255, 0.1) 100%)`
            }}
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute -bottom-8 right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
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
                                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95"
                            >
                                {cta.primary || "Book a Free Strategy Call"}
                            </button>
                            <button
                                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 active:scale-95"
                            >
                                {cta.secondary || "Chat on WhatsApp"}
                            </button>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
