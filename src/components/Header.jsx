import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl font-bold text-gray-900"
                        >
                            INVENTIO
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-sm font-semibold text-blue-600"
                        >
                            Inc
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1">
                                Services
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>

                            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                                <Link to="/services/radio" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                                    Radio Advertising
                                </Link>
                                <Link to="/services/billboard" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                                    Billboard Advertising
                                </Link>
                                <Link to="/services/social-media" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                                    Social Media Ads
                                </Link>
                                <Link to="/services/brand-design" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                                    Brand Design
                                </Link>
                            </div>
                        </div>

                        <a href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Strategy Call
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-700 hover:text-blue-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-gray-200 space-y-3"
                    >
                        <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2">
                            Home
                        </Link>
                        <Link to="/services/radio" className="block text-gray-700 hover:text-blue-600 py-2">
                            Radio Advertising
                        </Link>
                        <Link to="/services/billboard" className="block text-gray-700 hover:text-blue-600 py-2">
                            Billboard Advertising
                        </Link>
                        <Link to="/services/social-media" className="block text-gray-700 hover:text-blue-600 py-2">
                            Social Media Ads
                        </Link>
                        <Link to="/services/brand-design" className="block text-gray-700 hover:text-blue-600 py-2">
                            Brand Design
                        </Link>
                        <a href="#contact" className="block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center">
                            Strategy Call
                        </a>
                    </motion.div>
                )}
            </nav>
        </header>
    )
}
