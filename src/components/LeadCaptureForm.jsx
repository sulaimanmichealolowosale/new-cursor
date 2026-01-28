'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { sectionFadeUpVariants, scaleFadeVariants, containerVariants } from '@/utils/motionVariants'

export default function LeadCaptureForm({ title = "Get Your Free Strategy Call", subtitle = "Let's discuss your advertising goals and create a winning strategy." }) {
    const { isDark } = useTheme()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true)
            setFormData({ name: '', email: '', phone: '', company: '', message: '' })
            setLoading(false)

            // Reset form after 3 seconds
            setTimeout(() => setSubmitted(false), 3000)
        }, 1000)
    }

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-primary-900 via-primary-900 to-primary-800 dark:from-primary-800 dark:via-primary-850 dark:to-primary-900 transition-colors duration-300 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 -right-32 w-64 h-64 bg-accent-light rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-accent-dark rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionFadeUpVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{title}</h2>
                    <p className="text-lg text-primary-200 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={scaleFadeVariants}
                    className="bg-white/95 dark:bg-primary-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 md:p-16 border border-white/20 dark:border-primary-700/40"
                >
                    {submitted ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-16"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="inline-block p-5 bg-green-100 dark:bg-green-900/30 rounded-full mb-6"
                            >
                                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                            <h3 className="text-3xl font-bold text-primary-900 dark:text-white mb-3">Thank You!</h3>
                            <p className="text-primary-600 dark:text-primary-300 text-lg leading-relaxed">
                                We've received your inquiry. Our team will contact you within 24 hours to discuss your strategy and next steps.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <label className="block text-sm font-semibold text-primary-900 dark:text-white mb-3">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent-light focus:border-transparent transition placeholder-primary-400 dark:placeholder-primary-500"
                                        placeholder="Your Name"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <label className="block text-sm font-semibold text-primary-900 dark:text-white mb-3">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent-light focus:border-transparent transition placeholder-primary-400 dark:placeholder-primary-500"
                                        placeholder="you@example.com"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label className="block text-sm font-semibold text-primary-900 dark:text-white mb-3">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent-light focus:border-transparent transition placeholder-primary-400 dark:placeholder-primary-500"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label className="block text-sm font-semibold text-primary-900 dark:text-white mb-3">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent-light focus:border-transparent transition placeholder-primary-400 dark:placeholder-primary-500"
                                        placeholder="Your Company"
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label className="block text-sm font-semibold text-primary-900 dark:text-white mb-3">
                                    Tell us about your advertising goals
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-5 py-3 border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent-light focus:border-transparent transition placeholder-primary-400 dark:placeholder-primary-500"
                                    placeholder="What are you looking to achieve with your advertising campaign?"
                                ></textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-accent-dark hover:bg-accent-dark/90 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </span>
                                ) : (
                                    "Get Your Strategy Call"
                                )}
                            </motion.button>

                            <p className="text-sm text-gray-600 text-center">
                                We'll never share your information. Check out our{' '}
                                <a href="#privacy" className="text-blue-600 hover:underline">
                                    privacy policy
                                </a>
                                .
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
