import React from 'react';
import { redirectToNewTab } from '../utils/navigation';
import techStack from '../data/tech-stack.json'

const SkillCard = ({ title, skills }) => {
  return (
    <div
      className="relative bg-[#f4f3ee] overflow-hidden bg-card rounded-3xl shadow-md p-8 h-full border border-zinc-100 transition-all duration-300"
      style={{
        transition: 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        willChange: 'transform',
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-6">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          // Rend le tout premier badge d'une couleur différente (couleur principale) comme sur le modèle
          const isFirst = index === 0;
          return (
            <span
              key={index}
              style={{ transitionDelay: `${index * 30}ms` }}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default ${
                isFirst
                  ? 'bg-black text-white hover:scale-105'
                  : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200/60 hover:text-black hover:scale-105'
              }`}
              onClick={() => redirectToNewTab(techStack[skill.id]?.link)}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
      
      {/* Léger reflet lumineux transparent dans le coin supérieur */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0" aria-hidden="true"></div>
    </div>
  );
};

export default SkillCard;