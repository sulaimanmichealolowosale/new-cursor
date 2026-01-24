import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServiceCard({ icon: Icon, title, description, link }) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -8 }}
            className="group relative bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
                {Icon && (
                    <div className="mb-4 inline-block p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                {link && (
                    <a
                        href={link}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
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

// Simple hook for intersection observer
function useInView(options) {
    const { ref, inView } = require('react').useState(false)

    require('react').useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                inView === false && require('react').useState(true)
                if (options.triggerOnce) {
                    observer.unobserve(entry.target)
                }
            }
        }, {
            threshold: options.threshold || 0.1
        })

        const element = document.querySelector('[data-observe]')
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return { ref, inView }
}
