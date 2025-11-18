import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { language, toggleLanguage } = useLanguage()
    const t = translations[language]

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' }
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setIsOpen(false)
        }
    }

    return (
        <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-900 z-50 animate-slideInDown">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="#"
                    className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent hover:scale-110 transition-transform"
                >
                    AQ
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="hover:text-purple-400 transition relative group"
                            style={{ animation: `slideInDown 0.6s ease-out ${0.1 * idx}s both` }}
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition border border-purple-600/50 hover:scale-105 transform duration-200 animate-scaleIn"
                        title={language === 'es' ? 'Change to English' : 'Cambiar a Español'}
                    >
                        <Globe size={18} />
                        <span className="font-medium">{language === 'es' ? 'ES' : 'EN'}</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 px-2 py-1 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition"
                        title={language === 'es' ? 'Change to English' : 'Cambiar a Español'}
                    >
                        <Globe size={16} />
                        <span className="text-sm">{language === 'es' ? 'ES' : 'EN'}</span>
                    </button>

                    <button
                        className="md:hidden hover:scale-110 transition-transform"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-4 animate-slideInDown">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block hover:text-purple-400 transition hover:translate-x-2 duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}