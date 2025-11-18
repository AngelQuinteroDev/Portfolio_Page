import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Contact() {
    const { language } = useLanguage()
    const t = translations[language]

    const contactMethods = [
        {
            icon: Mail,
            label: language === 'es' ? 'Email' : 'Email',
            value: 'angelquintero.dev@gmail.com',
            link: 'angelquintero.dev@gmail.com'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/AngelQuinteroDev',
            link: 'https://github.com/AngelQuinteroDev'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'angelquinterodev',
            link: 'https://www.linkedin.com/in/angelquinterodev/'
        }
    ]

    return (
        <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideInUp">{t.contact.title}</h2>
            <p className="text-gray-400 mb-12 text-lg animate-slideInUp" style={{ animationDelay: '0.1s' }}>
                {t.contact.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Left side */}
                <div className="animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {t.contact.description}
                    </p>

                    <div className="space-y-6">
                        {contactMethods.map((method, idx) => {
                            const Icon = method.icon
                            return (
                                <a
                                    key={method.label}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-purple-600 hover:bg-gray-900/50 transition group hover:scale-105 transform duration-300 hover:shadow-lg hover:shadow-purple-600/20 animate-slideInUp"
                                    style={{ animationDelay: `${0.1 * idx + 0.2}s` }}
                                >
                                    <Icon size={24} className="text-purple-400 group-hover:scale-125 transition-transform group-hover:rotate-6" />
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">{method.label}</p>
                                        <p className="text-white group-hover:text-purple-400 transition">{method.value}</p>
                                    </div>
                                    <ArrowRight size={20} className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                </a>
                            )
                        })}
                    </div>

                    <div className="mt-8 p-6 bg-purple-600/10 border border-purple-600/30 rounded-lg animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                        <p className="text-purple-300 text-sm font-medium">
                            {t.contact.tip}
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <div className="space-y-6 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                    <div className="p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-600 transition hover:scale-105 transform duration-300 hover:shadow-lg hover:shadow-purple-600/20 animate-scaleIn">
                        <h3 className="text-2xl font-bold mb-4">{t.contact.domain}</h3>
                        <a
                            href="https://angelquintero.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-3xl font-bold text-purple-400 hover:text-purple-300 hover:translate-x-1 transition-all duration-300 group"
                        >
                            angelquintero.dev
                            <ExternalLink size={28} className="group-hover:scale-125 transition-transform group-hover:rotate-12" />
                        </a>
                        <p className="text-gray-400 mt-4">
                            {t.contact.domainDesc}
                        </p>
                    </div>

                    <div className="p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-600 transition hover:scale-105 transform duration-300 hover:shadow-lg hover:shadow-purple-600/20 animate-scaleIn" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-xl font-bold mb-4">{t.contact.workTogether}</h3>
                        <p className="text-gray-300 mb-6">
                            {t.contact.workTogetherDesc}
                        </p>
                        <a
                            href="mailto:angelquintero.dev@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium hover:scale-105 transform duration-200 hover:shadow-lg hover:shadow-purple-600/50 group"
                        >
                            {t.contact.startConversation}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}