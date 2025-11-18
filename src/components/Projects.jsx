import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Projects() {
    const { language } = useLanguage()
    const t = translations[language]

    const projects = [
        {
            title: language === 'es'
                ? 'Sistema de Automatización de Parqueaderos con IA'
                : 'Parking Automation System with AI',
            description: language === 'es'
                ? 'Sistema que integra visión por computador con un modelo YOLO entrenado para reconocer placas colombianas. La API fue desarrollada con FastAPI y se comunica con un backend en Node.js/Express implementado con el patrón Repository y MVC para almacenar información en MySQL.'
                : 'System integrating computer vision using a custom YOLO model trained to detect Colombian license plates. The API was built with FastAPI and communicates with a Node.js/Express backend using the Repository and MVC patterns to store data in a MySQL database.',
            tech: ['FastAPI', 'YOLO', 'Python', 'Node.js', 'Express', 'MySQL'],
            github: 'https://github.com/AngelQuinteroDev/Parking-Vision-System',
            live: '#'
        },

        {
            title: language === 'es'
                ? 'WorkOut Tracker'
                : 'WorkOut Tracker',
            description: language === 'es'
                ? 'Aplicación backend desarrollada con NestJS y TypeScript para registrar entrenamientos, rutinas y progreso de usuarios. Implementa autenticación segura con JWT y utiliza PostgreSQL para la persistencia de datos.'
                : 'Backend application built with NestJS and TypeScript to track workouts, routines, and user progress. Implements secure authentication with JWT and uses PostgreSQL for data persistence.',
            tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT'],
            github: 'https://github.com/AngelQuinteroDev/Workout-Tracker', 
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