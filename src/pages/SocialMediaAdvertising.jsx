import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ScrollRevealSection from '../components/ScrollRevealSection'
import LeadCaptureForm from '../components/LeadCaptureForm'

export default function SocialMediaAdvertising() {
    const platforms = [
        {
            name: "Facebook & Instagram",
            description: "Reach billions of users with highly targeted ads based on interests, behavior, and demographics."
        },
        {
            name: "LinkedIn",
            description: "B2B advertising platform perfect for reaching business professionals and decision-makers."
        },
        {
            name: "TikTok",
            description: "Connect with younger audiences through creative, short-form video advertising."
        },
        {
            name: "YouTube",
            description: "Video advertising at scale, from in-stream ads to targeted placements across the platform."
        }
    ]

    const strategy = [
        "Audience research and segmentation for precise targeting",
        "Creative development optimized for social media formats",
        "Campaign setup and bid strategy optimization",
        "Daily monitoring and performance optimization",
        "Detailed reporting and ROI analysis"
    ]

    return (
        <div>
            <HeroSection
                title="Social Media Advertising That Converts"
                subtitle="Reach your ideal customers where they spend their time. Targeted campaigns across Facebook, Instagram, TikTok, YouTube, and more."
                cta={{
                    primary: "Book a Free Strategy Call",
                    secondary: "Chat on WhatsApp"
                }}
            />

            {/* Platforms Section */}
            <ScrollRevealSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Platforms We Manage</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Expert management across all major social media advertising platforms.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                                <p className="text-gray-700">{platform.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Why Social Media Advertising */}
            <ScrollRevealSection className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Social Media Advertising?</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: "🎯", title: "Precise Targeting", desc: "Reach exactly who you want based on interests, behavior, and demographics." },
                            { icon: "💰", title: "Cost-Effective", desc: "Control your budget and pay only for results that matter." },
                            { icon: "📊", title: "Real-Time Analytics", desc: "Track performance instantly and optimize on the fly." },
                            { icon: "🔄", title: "Retargeting", desc: "Re-engage interested prospects and convert them into customers." },
                            { icon: "🎨", title: "Creative Freedom", desc: "Dynamic ads, videos, carousels, and interactive formats." },
                            { icon: "📱", title: "Mobile First", desc: "Reach users on the devices they use most—mobile phones." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white rounded-lg border border-gray-200 text-center"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ScrollRevealSection>

            {/* Our Process */}
            <ScrollRevealSection className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Social Media Advertising Strategy</h2>
                    </motion.div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {strategy.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-lg transition"
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
                            { stat: "2000+", label: "Active Campaigns Managed" },
                            { stat: "$500M+", label: "Ad Spend Optimized" },
                            { stat: "5.2x", label: "Average ROI" }
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Social Media Campaign?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's create a targeted strategy to reach your ideal customers where they are.
                    </p>
                    <button
                        onClick={() => window.location.href = '#contact'}
                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95"
                    >
                        Get Your Social Media Strategy
                    </button>
                </div>
            </ScrollRevealSection>

            <LeadCaptureForm
                title="Transform Your Social Media Presence"
                subtitle="Get a free consultation on how to leverage social media advertising for maximum conversions."
            />
        </div>
    )
}
