import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/AngelQuinteroDev',
            label: 'GitHub'
        },
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/angelquinterodev/',
            label: 'LinkedIn'
        },
        {
            icon: Mail,
            href: 'mailto:angel@angelquintero.dev',
            label: 'Email'
        }
    ]

    return (
        <footer className="py-12 px-6 border-t border-gray-900 bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent mb-2">
                            Angel Quintero
                        </h3>
                        <p className="text-gray-400 text-sm">Backend Developer & AI Enthusiast</p>
                    </div>

                    <div className="flex gap-6 mt-6 md:mt-0">
                        {socialLinks.map((social) => {
                            const Icon = social.icon
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-600 hover:bg-purple-600/10 transition"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} className="text-purple-400" />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© {currentYear} Angel Quintero. All rights reserved.</p>
                    <p>Made with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}