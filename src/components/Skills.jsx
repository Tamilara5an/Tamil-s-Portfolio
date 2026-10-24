import React, { useEffect, useRef } from 'react';
import { skills } from '../data/constants';
import gsap from 'gsap';

const SkillIcon = ({ icon, name }) => (
  <div className="skill-icon flex flex-col items-center justify-center p-3 sm:p-4 m-2 sm:m-4 glass-card rounded-xl hover:bg-gray-800/50 transition-colors duration-300 w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
    <img
      src={icon}
      alt={name}
      className="w-10 h-10 sm:w-12 sm:h-12 mb-1.5 sm:mb-2 object-contain"
      loading="lazy"
    />
    <span className="text-xs sm:text-sm font-medium text-center truncate max-w-[90px] sm:max-w-[100px]">{name}</span>
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

    let screenCenter = window.innerWidth / 2;
    const handleResize = () => {
      screenCenter = window.innerWidth / 2;
    };
    window.addEventListener('resize', handleResize);

    const cleanupFns = [];

    rows.forEach(({ ref, direction }) => {
      const row = ref.current;
      if (!row) return;

      const icons = Array.from(row.children);
      const totalWidth = icons.reduce((acc, icon) => acc + icon.offsetWidth, 0);
      
      gsap.set(row, {
        x: direction === -1 ? 0 : -totalWidth / 2,
      });

      const tween = gsap.to(row, {
        x: direction === -1 ? -totalWidth / 2 : 0,
        duration: 50,
        ease: 'none',
        repeat: -1,
      });

      const updateScale = () => {
        const iconsToUpdate = Array.from(row.children);
        iconsToUpdate.forEach(icon => {
          const rect = icon.getBoundingClientRect();
          const iconCenter = rect.left + rect.width / 2;
          const distanceFromCenter = Math.abs(screenCenter - iconCenter);
          const scale = gsap.utils.mapRange(0, screenCenter, 1.08, 0.92, distanceFromCenter);
          gsap.to(icon, { scale: Math.max(scale, 0.92), duration: 0.1, ease: 'power1.out' });
        });
      };
      
      gsap.ticker.add(updateScale);

      cleanupFns.push(() => {
        tween.kill();
        gsap.ticker.remove(updateScale);
      });
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  const midIndex = Math.ceil(skills.length / 2);
  const firstRowSkills = [...skills.slice(0, midIndex), ...skills.slice(0, midIndex)];
  const secondRowSkills = [...skills.slice(midIndex), ...skills.slice(midIndex)];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-900/50 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Technical Skills</span>
      </h2>

      <div className="relative flex flex-col gap-4 sm:gap-8">
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
