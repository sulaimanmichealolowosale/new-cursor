import { motion } from 'framer-motion'

export default function ScrollRevealSection({ children, className = "" }) {
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
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
        >
            {children}
        </motion.section>
    )
}
