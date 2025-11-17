import { Github, Linkedin, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Hero() {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
            <div className="mb-12">
                <div className="inline-block mb-4 px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                    {t.hero.welcome}
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                    {t.hero.title}
                </h1>

                <p className="text-2xl text-gray-400 mb-2">{t.hero.subtitle}</p>
                <p className="text-lg text-purple-400 font-medium mb-6">{t.hero.role}</p>
            </div>

            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
                {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
                <a
                    href="https://github.com/AngelQuinteroDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                    <Github size={20} />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/angelquinterodev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-purple-600 hover:bg-purple-600/10 rounded-lg transition font-medium"
                >
                    <Linkedin size={20} />
                    LinkedIn
                </a>
                <a
                    href="#projects"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-purple-400 rounded-lg transition font-medium"
                >
                    {t.hero.viewWork}
                    <ArrowRight size={20} />
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-20">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}