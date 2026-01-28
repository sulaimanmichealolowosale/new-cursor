'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export default function BillboardAdvertising() {
    const benefits = [
        {
            title: "Maximum Visibility",
            description: "Dominate high-traffic locations and ensure your brand is impossible to miss."
        },
        {
            title: "24/7 Presence",
            description: "Your message works around the clock, reaching audiences throughout the day and night."
        },
        {
            title: "Strategic Placement",
            description: "We analyze traffic patterns and demographics to place billboards where they matter most."
        },
        {
            title: "Long-lasting Impact",
            description: "Build brand recall through repeated exposure in locations your audience frequents."
        }
    ]

    const process = [
        "Comprehensive location analysis and traffic pattern research",
        "Audience demographic mapping to identify optimal placements",
        "Creative design tailored for outdoor viewing at a distance",
        "Inventory negotiation with premium high-traffic locations",
        "Installation coordination and performance monitoring"
    ]

    return (
        <div>
            <HeroSection
                title="Billboard Advertising That Commands Attention"
                subtitle="Reach thousands of commuters and pedestrians daily with strategically placed billboards. Dominate the outdoor advertising landscape in your market."
                cta={{
                    primary: "Book a Free Strategy Call",
                    secondary: "Chat on WhatsApp"
                }}
            />

            {/* Benefits Section */}
            <ScrollRevealSection className="py-20 bg-white dark:bg-primary-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Power of Billboard Advertising</h2>
                        <p className="text-xl text-gray-600 dark:text-primary-300 max-w-2xl mx-auto">
                            Billboard advertising continues to be one of the most effective ways to reach large audiences with a simple, compelling message.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 border-l-4 border-accent-dark dark:border-accent-light bg-accent-dark/5 dark:bg-accent-light/5 rounded-lg"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-700 dark:text-primary-300">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Placement Strategy */}
            <ScrollRevealSection className="py-20 bg-gray-50 dark:bg-primary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Billboard Placement Strategy</h2>
                        <p className="text-xl text-gray-600 dark:text-primary-300 max-w-2xl mx-auto">
                            Strategic placement is everything. We use data and expertise to ensure maximum visibility and impact.
                        </p>
                    </motion.div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 p-4 bg-white dark:bg-primary-700 rounded-lg border border-gray-200 dark:border-primary-600 hover:shadow-lg transition"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-dark dark:bg-accent-light text-white dark:text-primary-900 flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 dark:text-primary-300 pt-1">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Placement Types */}
            <ScrollRevealSection className="py-20 bg-white dark:bg-primary-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Billboard Types We Offer</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Standard Billboards",
                                description: "Classic 14x48 highway billboards with excellent visibility for commuters."
                            },
                            {
                                name: "Digital Billboards",
                                description: "Dynamic, rotating advertisements that capture attention with motion and color."
                            },
                            {
                                name: "Transit Ads",
                                description: "Reach audiences at bus stops, transit stations, and on public transportation."
                            }
                        ].map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-gradient-to-br from-accent-dark/10 dark:from-accent-light/10 to-transparent border border-accent-dark/20 dark:border-accent-light/20 rounded-lg text-center hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{type.name}</h3>
                                <p className="text-gray-600 dark:text-primary-300">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Stats Section */}
            <ScrollRevealSection className="py-20 bg-gradient-to-r from-accent-dark to-purple-600 text-white dark:from-accent-light dark:to-purple-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { stat: "1000+", label: "Billboard Placements Managed" },
                            { stat: "100M+", label: "Annual Impressions" },
                            { stat: "2.8x", label: "Average ROI" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                                <p className="text-blue-100">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* CTA Section */}
            <ScrollRevealSection className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Dominate the Outdoor Advertising Space</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's identify the perfect billboard locations to reach your target audience.
                    </p>
                    <button
                        onClick={() => window.location.href = '#contact'}
                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95"
                    >
                        Plan Your Billboard Campaign
                    </button>
                </div>
            </ScrollRevealSection>

            <LeadCaptureForm
                title="Ready to Make Your Mark on the Streets?"
                subtitle="Get expert advice on billboard placements that maximize reach and brand impact."
            />
        </div>
    )
}
