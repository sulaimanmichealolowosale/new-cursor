'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import ServiceCard from '@/components/ServiceCard'
import LeadCaptureForm from '@/components/LeadCaptureForm'

// Icons as simple SVG components
const RadioIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
    </svg>
)

const BillboardIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13 13h8v8h-8zm0-8h8v8h-8zM3 13h8v8H3zm0-8h8v8H3z" />
    </svg>
)

const SocialIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9h-3v5h-2v-5H8v-2h3V9c0-1.1.9-2 2-2h2v2h-2v2h3v2z" />
    </svg>
)

const BrandIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
)

export default function Home() {
    const services = [
        {
            icon: RadioIcon,
            title: "Radio Advertising",
            description: "Reach local audiences through strategic radio placements. We handle planning, scripting, and media buying for maximum impact.",
            link: "/services/radio"
        },
        {
            icon: BillboardIcon,
            title: "Billboard Advertising",
            description: "Dominate outdoor advertising with high-traffic billboard placements. Strategic positioning for maximum brand visibility.",
            link: "/services/billboard"
        },
        {
            icon: SocialIcon,
            title: "Social Media Advertising",
            description: "Targeted paid campaigns across Instagram, Facebook, and more. Data-driven strategies for measurable results.",
            link: "/services/social-media"
        },
        {
            icon: BrandIcon,
            title: "Brand Design",
            description: "Professional logo design, brand identity systems, and visual guidelines. Build a memorable brand presence.",
            link: "/services/brand-design"
        }
    ]

    const processSteps = [
        {
            number: 1,
            title: "Discovery",
            description: "We understand your business goals, target audience, and competitive landscape."
        },
        {
            number: 2,
            title: "Strategy",
            description: "Our team crafts a customized advertising strategy that aligns with your objectives."
        },
        {
            number: 3,
            title: "Execution",
            description: "We create compelling content and manage placements across all selected channels."
        },
        {
            number: 4,
            title: "Optimization",
            description: "Continuous monitoring and refinement to maximize campaign performance and ROI."
        }
    ]

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title="Elevate Your Brand with Strategic Advertising"
                subtitle="INVENTIO Inc connects your business with high-impact advertising channels. Radio, billboards, social media, and brand design—all in one place."
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
                        <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">Our Services</h2>
                        <p className="text-xl text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
                            Comprehensive advertising solutions tailored to elevate your brand across all media channels.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* How It Works Section */}
            <ScrollRevealSection className="py-20 bg-primary-50 dark:bg-primary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">How It Works</h2>
                        <p className="text-xl text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
                            Our proven process ensures your advertising campaign succeeds at every stage.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-16 rounded-full bg-accent-dark dark:bg-accent-light text-white dark:text-primary-900 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg"
                                    >
                                        {step.number}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2 text-center">{step.title}</h3>
                                    <p className="text-primary-600 dark:text-primary-300 text-center">{step.description}</p>
                                </div>

                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-dark dark:from-accent-light to-transparent"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Why Inventio Section */}
            <ScrollRevealSection className="py-20 bg-white dark:bg-primary-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-primary-900 dark:text-white">Why Choose INVENTIO Inc?</h2>

                            <div className="space-y-4">
                                {[
                                    "Multi-channel expertise across all advertising media",
                                    "Proven track record with successful brand launches",
                                    "Data-driven strategies and continuous optimization",
                                    "Dedicated team focused on your success",
                                    "Transparent reporting and measurable results",
                                    "Flexible packages for businesses of all sizes"
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-accent-dark dark:bg-accent-light flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white dark:text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-primary-700 dark:text-primary-200">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-accent-dark to-accent-light dark:from-accent-light dark:to-accent-dark rounded-2xl p-12 text-white dark:text-primary-900"
                        >
                            <h3 className="text-2xl font-bold mb-6">Let's Elevate Your Brand</h3>
                            <p className="mb-8 opacity-90">
                                Ready to take your advertising to the next level? Our team is excited to help you reach new heights and connect with your ideal audience.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block px-6 py-3 bg-white dark:bg-primary-800 text-accent-dark dark:text-accent-light font-semibold rounded-lg hover:opacity-90 transition"
                            >
                                Start Your Free Consultation
                            </a>
                        </motion.div>
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Lead Capture Form */}
            <LeadCaptureForm
                title="Ready to Transform Your Advertising Strategy?"
                subtitle="Get a free consultation with our expert team. No obligations, just insights."
            />
        </div>
    )
}
