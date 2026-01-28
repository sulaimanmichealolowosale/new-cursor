'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export default function BrandDesign() {
    const services = [
        {
            icon: "🎨",
            title: "Logo Design",
            description: "Custom, memorable logos that represent your brand's essence and values."
        },
        {
            icon: "🏷️",
            title: "Brand Identity",
            description: "Complete brand guidelines including colors, typography, and visual systems."
        },
        {
            icon: "🖼️",
            title: "Marketing Materials",
            description: "Professional design for banners, brochures, business cards, and collateral."
        },
        {
            icon: "💻",
            title: "Digital Assets",
            description: "Website graphics, landing pages, and digital design elements."
        },
        {
            icon: "📱",
            title: "Social Media Design",
            description: "Custom graphics and templates for social media consistency."
        },
        {
            icon: "📊",
            title: "Presentation Design",
            description: "Professional pitch decks and presentation templates."
        }
    ]

    const designProcess = [
        {
            phase: "Discovery",
            details: "Understanding your brand, business goals, and target audience."
        },
        {
            phase: "Concept Development",
            details: "Creating initial concepts and design directions for your review."
        },
        {
            phase: "Design Refinement",
            details: "Refining the chosen direction based on your feedback."
        },
        {
            phase: "Finalization",
            details: "Completing all files, formats, and documentation for implementation."
        },
        {
            phase: "Brand Guidelines",
            details: "Delivering comprehensive brand guidelines for consistent application."
        }
    ]

    return (
        <div>
            <HeroSection
                title="Professional Brand Design That Stands Out"
                subtitle="Build a distinctive brand identity that resonates with your audience. From logo design to complete brand systems, we create visual excellence."
                cta={{
                    primary: "Book a Free Strategy Call",
                    secondary: "Chat on WhatsApp"
                }}
            />

            {/* Services Section */}
            <ScrollRevealSection className="py-20 bg-white dark:bg-primary-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Brand Design Services</h2>
                        <p className="text-xl text-gray-600 dark:text-primary-300 max-w-2xl mx-auto">
                            Complete design solutions to build a cohesive, professional brand presence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="p-6 bg-gradient-to-br from-accent-dark/10 dark:from-accent-light/10 to-transparent border border-accent-dark/20 dark:border-accent-light/20 rounded-lg hover:shadow-lg transition"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-gray-700 dark:text-primary-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Why Professional Branding */}
            <ScrollRevealSection className="py-20 bg-gray-50 dark:bg-primary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Why Professional Brand Design Matters</h2>

                            <ul className="space-y-4">
                                {[
                                    "First impressions count—your brand design shapes how customers perceive you.",
                                    "Professional design builds trust and credibility in your market.",
                                    "Consistent branding across all touchpoints reinforces brand recognition.",
                                    "Strong design differentiates you from competitors.",
                                    "Quality design communicates your brand values and personality.",
                                    "Professional materials attract higher-quality leads and customers."
                                ].map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-accent-dark dark:bg-accent-light flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white dark:text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 dark:text-primary-300">{point}</span>
                                    </motion.div>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-accent-dark to-purple-600 dark:from-accent-light dark:to-purple-500 rounded-2xl p-12 text-white dark:text-primary-900"
                        >
                            <h3 className="text-2xl font-bold mb-6">Transform Your Brand Today</h3>
                            <p className="mb-6 text-white/80 dark:text-primary-900/80">
                                Whether you're a startup building your brand from scratch or an established business looking to refresh, we have the expertise to create designs that resonate.
                            </p>
                            <button
                                onClick={() => window.location.href = '#contact'}
                                className="px-6 py-3 bg-white dark:bg-primary-700 text-accent-dark dark:text-accent-light font-semibold rounded-lg hover:opacity-90 transition"
                            >
                                Start Your Brand Project
                            </button>
                        </motion.div>
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Design Process */}
            <ScrollRevealSection className="py-20 bg-white dark:bg-primary-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Design Process</h2>
                        <p className="text-xl text-gray-600 dark:text-primary-300 max-w-2xl mx-auto">
                            A collaborative approach to creating brand designs that exceed expectations.
                        </p>
                    </motion.div>

                    <div className="space-y-6 max-w-3xl mx-auto">
                        {designProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-6 p-6 bg-accent-dark/5 dark:bg-accent-light/5 rounded-lg border border-accent-dark/20 dark:border-accent-light/20"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-dark dark:bg-accent-light text-white dark:text-primary-900 flex items-center justify-center text-lg font-bold">
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.phase}</h4>
                                    <p className="text-gray-700 dark:text-primary-300">{step.details}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Design Styles */}
            <ScrollRevealSection className="py-20 bg-gray-50 dark:bg-primary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Design Styles We Specialize In</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {["Minimalist", "Modern & Trendy", "Corporate Professional", "Bold & Vibrant"].map((style, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white dark:bg-primary-700 rounded-lg border border-gray-200 dark:border-primary-600 text-center hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-dark to-purple-600 dark:from-accent-light dark:to-purple-500 rounded-lg mx-auto mb-4"></div>
                                <p className="font-semibold text-gray-900 dark:text-white">{style}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* CTA Section */}
            <ScrollRevealSection className="py-16 bg-white dark:bg-primary-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Build Your Brand?</h2>
                    <p className="text-lg text-gray-600 dark:text-primary-300 mb-8">
                        Let's create a distinctive brand identity that elevates your business.
                    </p>
                    <button
                        onClick={() => window.location.href = '#contact'}
                        className="px-8 py-4 bg-accent-dark dark:bg-accent-light text-white dark:text-primary-900 font-semibold rounded-lg hover:opacity-90 transition transform hover:scale-105 active:scale-95"
                    >
                        Start Your Brand Design Project
                    </button>
                </div>
            </ScrollRevealSection>

            <LeadCaptureForm
                title="Let's Create Your Perfect Brand"
                subtitle="Get a free consultation on how professional brand design can elevate your business."
            />
        </div>
    )
}
