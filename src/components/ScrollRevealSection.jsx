import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function ScrollRevealSection({ children, className = "" }) {
    const { isDark } = useTheme()

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <motion.section
            className={`transition-colors duration-300 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
        >
            {children}
        </motion.section>
    )
}
