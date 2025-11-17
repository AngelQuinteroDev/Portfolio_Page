export default function Skills() {
    const skillCategories = [
        {
            category: 'Backend',
            skills: [
                { name: 'JavaScript/Node.js', level: 90 },
                { name: 'Python', level: 85 },
                { name: 'FastAPI', level: 80 },
                { name: 'REST APIs', level: 90 }
            ]
        },
        {
            category: 'Databases',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'MongoDB', level: 80 },
                { name: 'Firebase', level: 75 }
            ]
        },
        {
            category: 'Other',
            skills: [
                { name: 'AI Integration', level: 75 },
                { name: 'System Design', level: 80 },
                { name: 'Docker', level: 70 },
                { name: 'Git/GitHub', level: 90 }
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 mb-12 text-lg">Technologies and tools I work with</p>

            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                    <div key={category.category}>
                        <h3 className="text-2xl font-bold text-purple-400 mb-6">{category.category}</h3>
                        <div className="space-y-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Why These Technologies?</h3>
                <p className="text-gray-300">
                    I choose tools based on project requirements and best practices. These technologies allow me to build
                    scalable, maintainable, and high-performance applications. I'm always learning and adapting to new
                    technologies that can improve development workflows and application quality.
                </p>
            </div>
        </section>
    )
}