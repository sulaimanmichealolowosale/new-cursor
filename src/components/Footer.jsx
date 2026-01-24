import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">INVENTIO Inc</h3>
                        <p className="text-sm">
                            Connecting businesses with high-impact advertising channels across digital and physical media.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/services/radio" className="hover:text-blue-400 transition">
                                    Radio Advertising
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/billboard" className="hover:text-blue-400 transition">
                                    Billboard Advertising
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/social-media" className="hover:text-blue-400 transition">
                                    Social Media Ads
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/brand-design" className="hover:text-blue-400 transition">
                                    Brand Design
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="hover:text-blue-400 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="hover:text-blue-400 transition">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-400 transition">
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
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
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
