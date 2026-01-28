'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { isDark, toggleTheme } = useTheme()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-primary-900/10 border-b border-primary-200/10 dark:border-primary-700/10 transition-all duration-300">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xl font-bold text-primary-900 dark:text-white transition-colors group-hover:text-accent-dark dark:group-hover:text-accent-light"
                        >
                            INVENTIO
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-xs font-semibold text-accent-dark tracking-wider"
                        >
                            Inc
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link href="/" className="text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-accent-dark dark:hover:text-accent-light transition duration-200">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-accent-dark dark:hover:text-accent-light transition flex items-center gap-2">
                                Services
                                <motion.svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </motion.svg>
                            </button>

                            <motion.div
                                className="absolute left-0 mt-0 w-56 backdrop-blur-lg bg-white/95 dark:bg-primary-800/95 border border-primary-200/40 dark:border-primary-700/40 rounded-xl shadow-lg dark:shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200"
                                initial={{ y: -10, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                            >
                                <Link href="/services/radio" className="block px-5 py-4 text-sm text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700/50 hover:text-accent-dark dark:hover:text-accent-light transition border-b border-primary-100 dark:border-primary-700/30 last:border-b-0">
                                    Radio Advertising
                                </Link>
                                <Link href="/services/billboard" className="block px-5 py-4 text-sm text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700/50 hover:text-accent-dark dark:hover:text-accent-light transition border-b border-primary-100 dark:border-primary-700/30 last:border-b-0">
                                    Billboard Advertising
                                </Link>
                                <Link href="/services/social-media" className="block px-5 py-4 text-sm text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700/50 hover:text-accent-dark dark:hover:text-accent-light transition border-b border-primary-100 dark:border-primary-700/30 last:border-b-0">
                                    Social Media Ads
                                </Link>
                                <Link href="/services/brand-design" className="block px-5 py-4 text-sm text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700/50 hover:text-accent-dark dark:hover:text-accent-light transition border-b border-primary-100 dark:border-primary-700/30 last:border-b-0">
                                    Brand Design
                                </Link>
                            </motion.div>
                        </div>

                        {/* Contact Link */}
                        <a href="#contact" className="text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-accent-dark dark:hover:text-accent-light transition">
                            Contact
                        </a>

                        {/* Divider */}
                        <div className="w-px h-5 bg-primary-200/50 dark:bg-primary-700/50"></div>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-700 dark:to-primary-800 hover:from-primary-300 hover:to-primary-200 dark:hover:from-primary-600 dark:hover:to-primary-700 border-2 border-primary-300/70 dark:border-primary-600/70 hover:border-primary-400 dark:hover:border-primary-500 shadow-md hover:shadow-lg transition-all duration-400"
                            aria-label="Toggle theme"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: isDark ? 180 : 0 }}
                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                {isDark ? (
                                    <svg className="w-5 h-5 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm.707-7.071a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-slate-700 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </motion.div>
                        </motion.button>

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
                            className="px-6 py-2.5 bg-accent-dark text-white text-sm font-semibold rounded-lg hover:bg-accent-dark/90 transition shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Strategy Call
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-700 dark:to-primary-800 hover:from-primary-300 hover:to-primary-200 dark:hover:from-primary-600 dark:hover:to-primary-700 border-2 border-primary-300/70 dark:border-primary-600/70 hover:border-primary-400 dark:hover:border-primary-500 shadow-md hover:shadow-lg transition-all duration-400"
                            aria-label="Toggle theme"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isDark ? (
                                <svg className="w-5 h-5 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm.707-7.071a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-slate-700 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </motion.button>
                        <motion.button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-primary-600 dark:text-primary-300 hover:text-accent-dark dark:hover:text-accent-light transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-primary-200/30 dark:border-primary-700/30 space-y-3"
                    >
                        <Link href="/" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Home
                        </Link>
                        <Link href="/services/radio" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Radio Advertising
                        </Link>
                        <Link href="/services/billboard" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Billboard Advertising
                        </Link>
                        <Link href="/services/social-media" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Social Media Ads
                        </Link>
                        <Link href="/services/brand-design" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Brand Design
                        </Link>
                        <a href="#contact" className="block px-6 py-2 bg-accent-dark text-white rounded-lg hover:bg-accent-dark/90 text-center">
                            Contact Us
                        </a>
                    </motion.div>
                )}
            </nav>
        </header>
    )
}
