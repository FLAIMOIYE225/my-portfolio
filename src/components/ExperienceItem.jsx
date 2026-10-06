import React from 'react';
import { redirectToNewTab } from '../utils/navigation';
import { useTranslation } from 'react-i18next';

const ExperienceItem = ({ role, company, period, description, highlights, isInternship }) => {
  const { t } = useTranslation();
  return (
    <div className="relative pl-16 md:pl-20">
      
      {/* 🟢 Le point indicateur sur la ligne temporelle */}
      <div className="absolute left-3.5 md:left-5.5 top-1.5 w-5 h-5 rounded-full bg-[#f2b75f] border-4 border-white z-10"></div>
      
      {/* Contenu de la carte */}
      <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-900">{role}</h3>
            <div className="flex items-center gap-2 mt-1 text-zinc-500">
              {/* Icône Mallette */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              <span className="text-sm font-medium cursor-pointer"
                onClick={() => redirectToNewTab(company.website)}
              >
                {company.name}
              </span>

              {/* 🎓 Badge Stage (s'affiche uniquement si isInternship est true) */}
              {isInternship && (
                <span className="ml-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-amber-50 text-amber-600 border border-amber-200 rounded-md">
                  {t('experience.internship')}
                </span>
              )}
            </div>
          </div>
          
          {/* Badge de la période */}
          <span className="px-4 py-2 rounded-full bg-zinc-100 text-sm font-medium text-zinc-500 whitespace-nowrap">
            {period}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-zinc-500 mb-6 leading-relaxed text-sm md:text-base">
          {description}
        </p>
        
        {/* Liste des points clés (Highlights) */}
        <div className="space-y-3">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              {/* Icône Check verte/orange */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#f2b75f] shrink-0 mt-0.5">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-zinc-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ExperienceItem;