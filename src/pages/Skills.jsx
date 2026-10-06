import React from 'react';
import SkillCard from '../components/SkillCard';
import skillsData from '../data/skills.json'
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    // <section id="skills" className="py-20 bg-white">
    <section id="tech-stack" className="py-20 bg-[#e9e5d8]">
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div 
          // className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          className='section-header-container'
          style={{
            willChange: 'opacity, transform',
            transition: 'opacity 350ms cubic-bezier(0.33, 1, 0.68, 1), transform 350ms cubic-bezier(0.33, 1, 0.68, 1)'
          }}
        >
          <span 
            // className="text-xl font-semibold tracking-wider text-amber-500 uppercase"
            className='section-label'
          >
            {t('skills.sectionLabel')}
          </span>
          {/* <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            React, UI/UX, and modern frontend tools
          </h2> */}
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
            {t('skills.description')}
          </p>
        </div>

        {/* GRILLE DE COMPÉTENCES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              style={{
                willChange: 'opacity, transform',
                transition: 'opacity 350ms cubic-bezier(0.33, 1, 0.68, 1), transform 350ms cubic-bezier(0.33, 1, 0.68, 1)',
                transitionDelay: `${index * 40}ms`
              }}
            >
              <SkillCard title={category.title} skills={category.skills} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;