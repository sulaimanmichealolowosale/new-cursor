import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { placeholderImages } from '../utils/ImageUtils'

export default function ServiceCard({ icon: Icon, title, description, link, image }) {
    const { isDark } = useTheme()

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

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
            className="group relative h-full flex flex-col bg-white dark:bg-primary-800 rounded-xl border border-primary-200 dark:border-primary-700 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden"
        >
            {/* Fixed Height Image Section */}
            <div className="w-full h-48 overflow-hidden bg-primary-100 dark:bg-primary-700">
                <img
                    src={getImage()}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 p-6 flex flex-col flex-grow">
                {Icon && (
                    <div className="mb-4 inline-block p-3 bg-accent-light dark:bg-accent-dark rounded-lg group-hover:bg-accent-dark dark:group-hover:bg-accent-light transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
                    </div>
                )}

                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3 group-hover:text-accent-dark dark:group-hover:text-accent-light transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-primary-600 dark:text-primary-300 mb-6 leading-relaxed flex-grow">
                    {description}
                </p>

                {link && (
                    <a
                        href={link}
                        className="inline-flex items-center gap-2 text-accent-dark dark:text-accent-light font-semibold hover:text-accent-dark/80 dark:hover:text-accent-light/80 transition"
                    >
                        Learn More
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                )}
            </div>
        </motion.div>
    )
}
