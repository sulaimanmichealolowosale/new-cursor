'use client'

import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function Footer() {
    const { isDark } = useTheme()

    return (
        <footer className="bg-primary-900 dark:bg-primary-950 text-primary-300 dark:text-primary-400 py-16 transition-colors duration-300 border-t border-primary-800 dark:border-primary-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold">INVENTIO Inc</h3>
                        <p className="text-sm leading-relaxed text-primary-400">
                            Strategic advertising solutions connecting your brand with audiences across every channel.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/services/radio" className="text-primary-400 hover:text-accent-light transition duration-200">
                                    Radio Advertising
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/billboard" className="text-primary-400 hover:text-accent-light transition duration-200">
                                    Billboard Advertising
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/social-media" className="text-primary-400 hover:text-accent-light transition duration-200">
                                    Social Media Ads
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/brand-design" className="text-primary-400 hover:text-accent-light transition duration-200">
                                    Brand Design
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#about" className="text-primary-400 hover:text-accent-light transition duration-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-primary-400 hover:text-accent-light transition duration-200">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-accent-light transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                        <p className="text-sm mb-4">Ready to elevate your brand?</p>
                        <div className="flex gap-2">
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="mailto:hello@inventio.com"
                                className="px-4 py-2 bg-accent-dark text-white rounded hover:bg-accent-dark/90 transition text-sm"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-700 dark:border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 INVENTIO Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#privacy" className="hover:text-blue-400 transition">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-blue-400 transition">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
