import { Code2, Database, Brain } from 'lucide-react'

export default function About() {
    const features = [
        {
            icon: Code2,
            title: 'Backend Development',
            description: 'Specialized in building scalable APIs and backend systems with Node.js and Python/FastAPI.'
        },
        {
            icon: Database,
            title: 'Database Design',
            description: 'Experience with both relational (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases.'
        },
        {
            icon: Brain,
            title: 'AI Integration',
            description: 'Integrating AI solutions into applications to enhance functionality and user experience.'
        }
    ]

    return (
        <section id="about" className="py-20 px-6 bg-gray-900/50 border-y border-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                <p className="text-gray-400 mb-12 text-lg">What I do and what I'm passionate about</p>

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
                    <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        As a multimedia engineer, I've developed a unique perspective on technology that combines
                        creative problem-solving with technical expertise. My focus is on backend development where
                        I can build solid foundations that power great applications.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Whether it's architecting scalable systems, optimizing databases, or integrating cutting-edge
                        AI solutions, I'm committed to delivering high-quality code and innovative solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}