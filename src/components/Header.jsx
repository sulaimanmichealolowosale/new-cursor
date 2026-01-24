import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { isDark, toggleTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-primary-900/80 border-b border-primary-200/30 dark:border-primary-700/30 shadow-sm dark:shadow-lg transition-all duration-300">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl font-bold text-primary-900 dark:text-white transition-colors"
                        >
                            INVENTIO
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-sm font-semibold text-accent-dark"
                        >
                            Inc
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-primary-700 dark:text-primary-200 hover:text-accent-dark dark:hover:text-accent-light transition">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="text-primary-700 dark:text-primary-200 hover:text-accent-dark dark:hover:text-accent-light transition flex items-center gap-1">
                                Services
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>

                            <div className="absolute left-0 mt-0 w-48 backdrop-blur-md bg-white/95 dark:bg-primary-800/95 border border-primary-200/40 dark:border-primary-700/40 rounded-lg shadow-elevated dark:shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                                <Link to="/services/radio" className="block px-4 py-3 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700 hover:text-accent-dark transition">
                                    Radio Advertising
                                </Link>
                                <Link to="/services/billboard" className="block px-4 py-3 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700 hover:text-accent-dark transition">
                                    Billboard Advertising
                                </Link>
                                <Link to="/services/social-media" className="block px-4 py-3 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700 hover:text-accent-dark transition">
                                    Social Media Ads
                                </Link>
                                <Link to="/services/brand-design" className="block px-4 py-3 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-700 hover:text-accent-dark transition">
                                    Brand Design
                                </Link>
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-primary-100 dark:bg-primary-700 hover:bg-primary-200 dark:hover:bg-primary-600 transition"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm.707-7.071a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        <a href="#contact" className="px-6 py-2 bg-accent-dark text-white rounded-lg hover:bg-accent-dark/90 transition transform hover:scale-105 active:scale-95">
                            Strategy Call
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-primary-100 dark:bg-primary-700 hover:bg-primary-200 dark:hover:bg-primary-600 transition"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm.707-7.071a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-primary-700 dark:text-primary-200 hover:text-accent-dark"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-primary-200/30 dark:border-primary-700/30 space-y-3"
                    >
                        <Link to="/" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Home
                        </Link>
                        <Link to="/services/radio" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Radio Advertising
                        </Link>
                        <Link to="/services/billboard" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Billboard Advertising
                        </Link>
                        <Link to="/services/social-media" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
                            Social Media Ads
                        </Link>
                        <Link to="/services/brand-design" className="block text-primary-700 dark:text-primary-200 hover:text-accent-dark py-2">
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
