import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import experiencesData from '../data/experiences.json'
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    // <section id="experience" className="py-20 bg-zinc-50/60">
    <section id="experience" className="py-20 pt-0 bg-zinc-50">
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          {/* <span className="text-sm font-semibold tracking-wider text-[#f2b75f] uppercase">
            Experience
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            {t('experience.title')}
          </h2>
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
            {t('experience.description')}
          </p>
        </div>

        {/* CONTENEUR DE LA TIMELINE */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            
            {/* 📏 La ligne verticale grise en arrière-plan reliant les cartes */}
            <div className="absolute left-6 md:left-8 top-2 bottom-2 w-0.5 bg-zinc-200"></div>
            
            {/* Boucle sur les données */}
            <div className="space-y-12">
              {experiencesData.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  highlights={exp.highlights}
                  isInternship={exp.isInternship}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;