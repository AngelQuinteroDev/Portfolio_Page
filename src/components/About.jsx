import { Code2, Database, Brain } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function About() {
    const { language } = useLanguage()
    const t = translations[language]

    const features = [
        {
            icon: Code2,
            title: t.about.backend,
            description: t.about.backendDesc
        },
        {
            icon: Database,
            title: t.about.database,
            description: t.about.databaseDesc
        },
        {
            icon: Brain,
            title: t.about.ai,
            description: t.about.aiDesc
        }
    ]

    return (
        <section id="about" className="py-20 px-6 bg-gray-900/50 border-y border-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h2>
                <p className="text-gray-400 mb-12 text-lg">{t.about.subtitle}</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={feature.title}
                                className="p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-600/50 hover:bg-gray-900/80 transition group cursor-pointer"
                            >
                                <Icon size={40} className="text-purple-400 mb-4 group-hover:scale-110 transition" />
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="text-2xl font-bold mb-4">{t.about.journey}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        {t.about.journeyText1}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        {t.about.journeyText2}
                    </p>
                </div>
            </div>
        </section>
    )
}