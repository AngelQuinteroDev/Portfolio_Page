import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import { 
  SiJavascript, 
  SiPython, 
  SiFastapi, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiFirebase, 
  SiDocker, 
  SiGithub 
} from 'react-icons/si'
import { Brain, Cpu } from 'lucide-react'

export default function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  const skillCategories = [
    {
      category: t.skills.backend,
      skills: [
        { name: 'JavaScript/Node.js', icon: SiJavascript },
        { name: 'Python', icon: SiPython },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'REST APIs', icon: Cpu }
      ]
    },
    {
      category: t.skills.databases,
      skills: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Firebase', icon: SiFirebase }
      ]
    },
    {
      category: t.skills.other,
      skills: [
        { name: 'AI Integration', icon: Brain },
        { name: 'System Design', icon: Cpu },
        { name: 'Docker', icon: SiDocker },
        { name: 'Git/GitHub', icon: SiGithub }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.skills.title}</h2>
      <p className="text-gray-400 mb-12 text-lg">{t.skills.subtitle}</p>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-600 hover:bg-gray-900/80 transition group cursor-pointer"
                  >
                    <Icon className="text-3xl text-purple-400 group-hover:scale-110 transition" />
                    <span className="text-gray-300 font-medium group-hover:text-purple-300 transition">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
        <h3 className="text-xl font-bold mb-4">{t.skills.why}</h3>
        <p className="text-gray-300">
          {t.skills.whyText}
        </p>
      </div>
    </section>
  )
}