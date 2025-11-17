import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce API',
            description: 'A scalable REST API for an e-commerce platform with user authentication, product management, and order processing.',
            tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: 'AI Content Generator',
            description: 'Backend service that integrates AI models to generate content. Includes caching and optimization for better performance.',
            tech: ['Python', 'FastAPI', 'OpenAI', 'Redis'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: 'Real-time Analytics Dashboard',
            description: 'Backend system for processing and streaming real-time analytics data with WebSocket support.',
            tech: ['Node.js', 'MongoDB', 'WebSockets', 'Docker'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: 'Multi-tenant SaaS Platform',
            description: 'Robust backend architecture for a multi-tenant SaaS application with database isolation and scalability.',
            tech: ['Python', 'FastAPI', 'PostgreSQL', 'Firebase'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: 'Machine Learning Pipeline',
            description: 'Automated pipeline for training, testing, and deploying ML models with monitoring and logging.',
            tech: ['Python', 'scikit-learn', 'Docker', 'PostgreSQL'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        },
        {
            title: 'Mobile Backend Service',
            description: 'High-performance backend service for mobile applications with offline support and data synchronization.',
            tech: ['Node.js', 'MongoDB', 'Firebase', 'Firestore'],
            github: 'https://github.com/AngelQuinteroDev',
            live: '#'
        }
    ]

    return (
        <section id="projects" className="py-20 px-6 bg-gray-900/50 border-y border-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <p className="text-gray-400 mb-12 text-lg">Projects that showcase my skills and experience</p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-600 transition hover:shadow-lg hover:shadow-purple-600/10"
                        >
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium"
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
                                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                                >
                                    <Github size={18} />
                                    Code
                                </a>
                                {project.live !== '#' && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition ml-auto"
                                    >
                                        Live Demo
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