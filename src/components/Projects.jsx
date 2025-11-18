import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Projects() {
    const { language } = useLanguage()
    const t = translations[language]

    const projects = [
        {
            title: language === 'es' ? 'API de E-Commerce' : 'E-Commerce API',
            description: language === 'es'
                ? 'Una API REST escalable para una plataforma de e-commerce con autenticación de usuarios, gestión de productos y procesamiento de pedidos.'
                : 'A scalable REST API for an e-commerce platform with user authentication, product management, and order processing.',
            tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: language === 'es' ? 'Generador de Contenido IA' : 'AI Content Generator',
            description: language === 'es'
                ? 'Servicio backend que integra modelos de IA para generar contenido. Incluye caché y optimización para mejor rendimiento.'
                : 'Backend service that integrates AI models to generate content. Includes caching and optimization for better performance.',
            tech: ['Python', 'FastAPI', 'OpenAI', 'Redis'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: language === 'es' ? 'Dashboard de Análisis en Tiempo Real' : 'Real-time Analytics Dashboard',
            description: language === 'es'
                ? 'Sistema backend para procesar y transmitir datos de análisis en tiempo real con soporte de WebSocket.'
                : 'Backend system for processing and streaming real-time analytics data with WebSocket support.',
            tech: ['Node.js', 'MongoDB', 'WebSockets', 'Docker'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: language === 'es' ? 'Plataforma SaaS Multi-inquilino' : 'Multi-tenant SaaS Platform',
            description: language === 'es'
                ? 'Arquitectura backend robusta para una aplicación SaaS multi-inquilino con aislamiento de base de datos y escalabilidad.'
                : 'Robust backend architecture for a multi-tenant SaaS application with database isolation and scalability.',
            tech: ['Python', 'FastAPI', 'PostgreSQL', 'Firebase'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: language === 'es' ? 'Pipeline de Machine Learning' : 'Machine Learning Pipeline',
            description: language === 'es'
                ? 'Pipeline automatizado para entrenar, probar e implementar modelos de ML con monitoreo y registro de datos.'
                : 'Automated pipeline for training, testing, and deploying ML models with monitoring and logging.',
            tech: ['Python', 'scikit-learn', 'Docker', 'PostgreSQL'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: language === 'es' ? 'Servicio Backend Móvil' : 'Mobile Backend Service',
            description: language === 'es'
                ? 'Servicio backend de alto rendimiento para aplicaciones móviles con soporte offline y sincronización de datos.'
                : 'High-performance backend service for mobile applications with offline support and data synchronization.',
            tech: ['Node.js', 'MongoDB', 'Firebase', 'Firestore'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        }
    ]

    return (
        <section id="projects" className="py-20 px-6 bg-gray-900/50 border-y border-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideInUp">{t.projects.title}</h2>
                <p className="text-gray-400 mb-12 text-lg animate-slideInUp" style={{ animationDelay: '0.1s' }}>
                    {t.projects.subtitle}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-600 transition hover:shadow-xl hover:shadow-purple-600/20 hover:-translate-y-2 duration-300 animate-scaleIn"
                            style={{ animationDelay: `${0.1 * idx}s` }}
                        >
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, techIdx) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-600/40 transition animate-fadeIn"
                                        style={{ animationDelay: `${0.05 * techIdx}s` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-gray-800">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition hover:translate-x-1 duration-200"
                                >
                                    <Github size={18} />
                                    {t.projects.code}
                                </a>
                                {project.live !== '#' && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition ml-auto hover:translate-x-1 duration-200"
                                    >
                                        {t.projects.liveDemo}
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}