import React from 'react';
import profile from '../../data/profile.json';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  // Fonction pour remonter tout en haut de la page de manière fluide
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Extraction sécurisée des réseaux sociaux depuis ton JSON
	// const githubUrl = profile.socials?.find(s => s.platform === 'GitHub')?.url || '#';
	// const linkedinUrl = profile.socials?.find(s => s.platform === 'LinkedIn')?.url || '#';
	// const emailAddress = profile.contacts?.email || profile.contacts?.address || '';

  return (
    // <footer className="bg-zinc-50 border-t border-zinc-200" role="contentinfo">
		<footer className="bg-[#000000] border-t border-zinc-200" role="contentinfo">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* SÉCTION 1 : INFOS PERSO */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{profile.name}</h3>
              <p className="text-zinc-500 font-medium text-sm">{t('footer.role')}</p>
            </div>
            <p className="text-zinc-500 max-w-md leading-relaxed text-sm">
              {t('footer.description')}
            </p>
            
            {/* Localisation (Optionnel, ajustable selon tes préférences) */}
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{profile.status?.meta?.split('·')[0] || t('footer.remoteLocation')}</span>
            </div>
          </div>

          {/* SÉCTION 2 : NAVIGATION */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">{t('footer.navigationTitle')}</h4>
            <nav aria-label={t('footer.navigationAriaLabel')}>
              <ul className="space-y-3">
                <li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] rounded" href="#home">{t('navigation.home')}</a></li>
                <li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] rounded" href="#projects">{t('navigation.projects')}</a></li>
                <li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] rounded" href="#about">{t('footer.aboutLink')}</a></li>
                <li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] rounded" href="#contact">{t('navigation.contact')}</a></li>
              </ul>
            </nav>
          </div>

          {/* SÉCTION 3 : LIENS DE RECONNEXION */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">{t('footer.connectTitle')}</h4>
            <ul className="space-y-3">
              {/* GitHub */}
              <li>
                <a href={profile.socials.github.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] rounded" aria-label={t('footer.githubAriaLabel')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  {t('footer.githubName')}
                </a>
              </li>
              
              {/* LinkedIn */}
              <li>
                <a href={profile.socials.linkedin.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] rounded" aria-label={t('footer.linkedinAriaLabel')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  {t('footer.linkedinName')}
                </a>
              </li>

              {/* Email */}
              {profile.contacts.email && (
                <li>
                  <a href={`mailto:${profile.contacts.email}`} className="inline-flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    {t('footer.email')}
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>

      {/* ZONE BASSE : COPYRIGHT & SCROLL TO TOP */}
      <div className="border-t border-zinc-200 bg-zinc-100/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <p className="text-xs text-zinc-400">
              {t('footer.copyright', { year: new Date().getFullYear(), name: profile.name })}
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-zinc-400">{t('footer.madeWith')}</span>
              
              {/* Bouton pour remonter tout en haut */}
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f]" 
                aria-label={t('footer.scrollToTop')} 
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;