import React from 'react'
import { skills } from '../data/constants'

const SkillIcon = ({ icon, name }) => (
  <img
    src={icon}
    alt={name}
    className="w-10 h-10 mb-2 transition-transform duration-300 hover:scale-110"
  />
)

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/50">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Technical Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 glass-card rounded-xl hover:bg-gray-800/50 transition-all duration-300"
          >
            <SkillIcon icon={skill.icon} name={skill.name} />
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
