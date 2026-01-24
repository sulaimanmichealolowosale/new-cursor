import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ScrollRevealSection from '../components/ScrollRevealSection'
import LeadCaptureForm from '../components/LeadCaptureForm'

export default function RadioAdvertising() {
    const benefits = [
        {
            title: "Reach Local Audiences",
            description: "Connect with listeners in specific geographic areas during their commute or daily routines."
        },
        {
            title: "Cost-Effective Reach",
            description: "Achieve significant audience reach at a fraction of traditional media costs."
        },
        {
            title: "Targeted Time Slots",
            description: "Advertise during peak listening hours to maximize audience engagement and recall."
        },
        {
            title: "High Frequency",
            description: "Build brand recall through strategic repeat placements throughout the week."
        }
    ]

    const process = [
        "Market and audience analysis for your target demographic",
        "Creative script development tailored to radio format",
        "Station selection and negotiation for optimal placements",
        "Professional voice-over production and audio engineering",
        "Campaign management and performance tracking"
    ]

    return (
        <div>
            <HeroSection
                title="Radio Advertising That Resonates"
                subtitle="Reach engaged audiences through strategic radio placements. From script development to media buying, we handle every aspect of your radio campaign."
                cta={{
                    primary: "Book a Free Strategy Call",
                    secondary: "Chat on WhatsApp"
                }}
            />

            {/* Benefits Section */}
            <ScrollRevealSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Radio Advertising?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Radio remains one of the most effective channels for reaching engaged audiences in their daily lives.
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
                                className="p-6 border-l-4 border-blue-600 bg-blue-50 rounded-lg"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-700">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Our Radio Process */}
            <ScrollRevealSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Radio Advertising Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A comprehensive approach to ensure your message reaches the right listeners at the right time.
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
                                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 pt-1">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Stats Section */}
            <ScrollRevealSection className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { stat: "500+", label: "Successful Campaigns" },
                            { stat: "50M+", label: "Total Listeners Reached" },
                            { stat: "3.5x", label: "Average ROI" }
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Radio Campaign?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's discuss your goals and create a radio advertising strategy that drives real results.
                    </p>
                    <button
                        onClick={() => window.location.href = '#contact'}
                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95"
                    >
                        Book Your Free Consultation
                    </button>
                </div>
            </ScrollRevealSection>

            <LeadCaptureForm
                title="Start Your Radio Advertising Journey"
                subtitle="Get expert guidance on launching a radio campaign that resonates with your target audience."
            />
        </div>
    )
}
