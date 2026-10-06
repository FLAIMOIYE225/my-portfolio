import './Header.css';
import Navbar from '../ui/Navbar';
import profile from '../../assets/profile.png';
import { useEffect, useState } from 'react';
import { internalLinkNavigation } from '../../utils/navigation';
import { useTranslation } from 'react-i18next';
import settings from '../../data/settings.json'

const Header = ({ isModalOpen, setIsModalOpen = () => {} }) => {
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage || i18n.language;
    const [activeTab, setActiveTab] = useState("home");
    // 1. Nouvel état pour détecter le défilement
    const [isScrolled, setIsScrolled] = useState(false);

    const handleHashChange = () => {
        setActiveTab(window.location.hash.replace("#", ''));
    };

    // 2. Gestionnaire du défilement
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("hashchange", handleHashChange);
        // Écouter le scroll de la page
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        /* 3. Ajout dynamique des classes selon l'état du scroll */
        <header 
            className={`header row backdrop-blur-3xl sticky top-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'shadow-md shadow-zinc-900/5 border-b border-zinc-200/50' 
                    : 'bg-[#e9e7da]/95 border-b border-transparent'
            }`}
        >
            <div 
                className='profile-container row'
                onClick={() => internalLinkNavigation("home")}
            >
                <img className='profile-picture' src={profile} alt={t('header.profilePictureAlt')} />
                <span className='name'>{t('home.name')}</span>
            </div>

            <Navbar 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
                setIsModalOpen={setIsModalOpen}
            />

            <button 
                className='contact-btn'
                onClick={() => setIsModalOpen(true)}
            >
                <span>{t('header.letsTalk')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='arrow' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </button>            
            <div
                className="inline-flex items-center rounded-full border border-zinc-300/70 bg-white/70 p-1 shadow-sm"
                role="group"
                aria-label={t('header.selectLanguage')}
            >
                {settings.availableLanguages.map((code) => (
                    <button
                        key={code}
                        type="button"
                        onClick={() => i18n.changeLanguage(code)}
                        aria-pressed={language.startsWith(code)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b75f] ${
                            language.startsWith(code)
                                ? 'bg-[#f2b75f] text-zinc-950 shadow-sm'
                                : 'text-zinc-600 hover:bg-zinc-100'
                        }`}
                    >
                        {code.toUpperCase()}
                    </button>
                ))}
            </div>
        </header>
    );
}

export default Header;