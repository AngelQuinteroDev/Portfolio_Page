import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react'

export default function Contact() {
    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'angel@angelquintero.dev',
            link: 'mailto:angel@angelquintero.dev'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-12 text-lg">Let's connect and explore opportunities together</p>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Left side */}
                <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        I'm always interested in hearing about new projects and opportunities.
                        Whether you have a question or just want to say hello, feel free to get in touch!
                    </p>

                    <div className="space-y-6">
                        {contactMethods.map((method) => {
                            const Icon = method.icon
                            return (
                                <a
                                    key={method.label}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-purple-600 hover:bg-gray-900/50 transition group"
                                >
                                    <Icon size={24} className="text-purple-400" />
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">{method.label}</p>
                                        <p className="text-white group-hover:text-purple-400 transition">{method.value}</p>
                                    </div>
                                    <ArrowRight size={20} className="text-gray-600 group-hover:text-purple-400 transition" />
                                </a>
                            )
                        })}
                    </div>

                    <div className="mt-8 p-6 bg-purple-600/10 border border-purple-600/30 rounded-lg">
                        <p className="text-purple-300 text-sm font-medium">
                            💡 Tip: Email is usually the fastest way to reach me
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <div className="space-y-6">
                    <div className="p-8 bg-gray-900 rounded-lg border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4">My Personal Domain</h3>
                        <a
                            href="https://angelquintero.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-3xl font-bold text-purple-400 hover:text-purple-300 transition"
                        >
                            angelquintero.dev
                            <ExternalLink size={28} />
                        </a>
                        <p className="text-gray-400 mt-4">
                            Visit my personal domain for more information and additional resources.
                        </p>
                    </div>

                    <div className="p-8 bg-gray-900 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
                        <p className="text-gray-300 mb-6">
                            I'm open to freelance projects, full-time opportunities, and collaborations.
                            Let's create something amazing together!
                        </p>
                        <a
                            href="mailto:angel@angelquintero.dev"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                        >
                            Start a Conversation
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}