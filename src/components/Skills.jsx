import React, { useEffect, useRef } from 'react';
import { skills } from '../data/constants';
import gsap from 'gsap';

const SkillIcon = ({ icon, name }) => (
  <div className="skill-icon flex flex-col items-center justify-center p-4 m-4 glass-card rounded-xl hover:bg-gray-800/50 transition-colors duration-300 w-32 h-32 flex-shrink-0">
    <img
      src={icon}
      alt={name}
      className="w-12 h-12 mb-2"
    />
    <span className="text-sm font-medium text-center">{name}</span>
  </div>
);

const Skills = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    const rows = [
      { ref: firstRowRef, direction: -1 },
      { ref: secondRowRef, direction: 1 }
    ];

    const screenCenter = window.innerWidth / 2;

    rows.forEach(({ ref, direction }) => {
      const row = ref.current;
      if (!row) return;

      const icons = Array.from(row.children);
      const totalWidth = icons.reduce((acc, icon) => acc + icon.offsetWidth, 0);
      
      gsap.set(row, {
        x: direction === -1 ? 0 : -totalWidth / 2,
      });

      gsap.to(row, {
        x: direction === -1 ? -totalWidth / 2 : 0,
        duration: 60,
        ease: 'none',
        repeat: -1,
      });

      const updateScale = () => {
        const iconsToUpdate = Array.from(row.children);
        iconsToUpdate.forEach(icon => {
          const rect = icon.getBoundingClientRect();
          const iconCenter = rect.left + rect.width / 2;
          const distanceFromCenter = Math.abs(screenCenter - iconCenter);
          const scale = gsap.utils.mapRange(0, screenCenter, 1.1, 0.9, distanceFromCenter);
          gsap.to(icon, { scale: Math.max(scale, 0.9), duration: 0.1, ease: 'power1.out' });
        });
      };
      
      gsap.ticker.add(updateScale);

      return () => gsap.ticker.remove(updateScale);
    });

  }, []);

  const midIndex = Math.ceil(skills.length / 2);
  const firstRowSkills = [...skills.slice(0, midIndex), ...skills.slice(0, midIndex)];
  const secondRowSkills = [...skills.slice(midIndex), ...skills.slice(midIndex)];

  return (
    <section id="skills" className="py-16 bg-gray-900/50 overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Technical Skills</span>
      </h2>

      <div className="relative flex flex-col gap-8">
        <div ref={firstRowRef} className="flex w-max">
          {firstRowSkills.map((skill, index) => (
            <SkillIcon key={`row1-${index}`} icon={skill.icon} name={skill.name} />
          ))}
        </div>

        <div ref={secondRowRef} className="flex w-max">
          {secondRowSkills.map((skill, index) => (
            <SkillIcon key={`row2-${index}`} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
