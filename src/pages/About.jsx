import React from 'react';
import profile from '../assets/profile.png'; // Assure-toi d'avoir cette image dans tes assets
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  // Liste des statistiques pour éviter de coder les blocs en dur
  // const stats = [
  //   { value: "3+", label: "Years Experience", delay: "0ms" },
  //   { value: "15+", label: "Projects Delivered", delay: "50ms" },
  //   { value: "10+", label: "Happy Clients", delay: "100ms" },
  //   { value: "100%", label: "Success Rate", delay: "150ms" }
  // ];

  return (
    <section id="about" className="py-20 px-20 relative overflow-hidden bg-zinc-50">

      <div className='section-header-container'>
        {/* <span className="text-sm font-semibold tracking-wider text-[#f2b75f] uppercase"> */}
        <span className='section-label'>
          {t('about.sectionLabel')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
          {t('about.title')}
        </h2>
      </div>
      
      {/* 🔮 ARRIÈRE-PLAN : Effets de cercles lumineux (Glows) animés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2b75f]/5 via-transparent to-[#f2b75f]/3"></div>
        
        {/* Cercles de flou décoratifs */}
        <div className="absolute rounded-full bg-[#f2b75f]/10 blur-3xl opacity-40 animate-pulse" style={{ width: '200px', height: '200px', left: '10%', top: '20%' }}></div>
        <div className="absolute rounded-full bg-[#f2b75f]/10 blur-3xl opacity-30 animate-pulse" style={{ width: '150px', height: '150px', left: '80%', top: '60%' }}></div>
        <div className="absolute rounded-full bg-[#f2b75f]/10 blur-3xl opacity-20" style={{ width: '100px', height: '100px', left: '20%', top: '70%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 📸 BLOC GAUCHE : L'IMAGE DU PROFIL */}
          <div 
            className="relative justify-self-center lg:justify-self-start"
            style={{
              willChange: 'opacity, transform',
              transition: 'opacity 350ms cubic-bezier(0.33, 1, 0.68, 1), transform 350ms cubic-bezier(0.33, 1, 0.68, 1)'
            }}
          >
            <div className="relative max-w-sm sm:max-w-md">
              <div className="absolute -top-15 -left-15 w-25 h-25 rounded-full bg-[#ffffff]/100 -z-10 animate-float" style={{ animationDuration: '6s' }}></div>
              {/* Conteneur de l'image */}
              {/* <div className="aspect-[4/5] w-[320px] sm:w-[380px] rounded-3xl bg-[#f2b75f]/20 overflow-hidden shadow-md group transition-transform duration-300">
                <img 
                  src={profile} 
                  alt={t('about.profilePictureAlt')} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                />
              </div> */}
              <div className="picture">
                <div className="image-container">
                  <img src={profile} alt="" />
                </div>
              </div>
              {/* Carré décoratif en arrière-plan (ombrage orange en bas à droite) */}
              <div className="absolute -bottom-20 -right-6 w-32 h-32 rounded-2xl bg-[#f2b75f]/20 -z-10 animate-bounce" style={{ animationDuration: '6s' }}></div>
            </div>
          </div>

          {/* ✍️ BLOC DROIT : TEXTE & STATISTIQUES */}
          <div className="space-y-8">
            
            {/* Titre & Sous-titre */}
            {/* <div className="space-y-4"> */}
            {/* <div className='section-header-container'> */}
              {/* <span className="text-sm font-semibold tracking-wider text-[#f2b75f] uppercase"> */}
              {/* <span className='section-label'> */}
                {/* About Me */}
              {/* </span> */}
              {/* <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight"> */}
                {/* Senior Student &amp; Full Stack Developper */}
              {/* </h2> */}
            {/* </div> */}

            {/* Paragraphes de présentation */}
            <div className="space-y-6 text-base md:text-lg text-zinc-500 leading-relaxed">
              <p className='text-justify'>
                {t('about.paragraphOne')}
              </p>
              <p className='text-justify'>
                {t('about.paragraphTwo')}
              </p>
              {/* <p className='text-justify'>
                Beyond development, I'm fascinated by computer architecture, programming language design, operating systems, and the fundamentals that power modern software. I believe that strong engineering comes from understanding both high-level concepts and low-level mechanisms.
              </p> */}
              <p className='text-justify'>
                {t('about.paragraphThree')}
              </p>
            </div>

            {/* Grille des statistiques */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{ transitionDelay: stat.delay }}
                  className="text-center p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group cursor-default"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#f2b75f] transition-transform duration-200 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;