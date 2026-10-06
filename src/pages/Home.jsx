import "./Home.css";
import profile from '../assets/profile.png';
import { internalLinkNavigation } from "../utils/navigation";
import stats from '../data/stats.json';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <section id="home">
            <div className="home">

                <div className="profile row">

                    <div className="about-me">
                        {/* Badge de disponibilité ajouté ici */}
                        <div className="status-badge" aria-label={t('home.statusLabel')}>
                            <div className="status-dot" aria-hidden="true"></div>
                            <span className="status-text">
                                {t('home.availability')}
                            </span>
                        </div>

                        <h1 className="presentation">
                            {t('home.greeting')}
                            <span className="name">
                                {t('home.name')}
                                <span className="bar"></span>
                            </span>
                        </h1>

                        {/* <p className="text">
                            Étudiant en 4ème année à l’ESTEM en Science des Données et Développement Informatique, passionné par les TICs, je suis motivé à renforcer mes compétences à travers des projets innovants.
                        </p> */}
                        <p className="text">
                            {t('home.introduction')}
                        </p>

                        <div className="stats row">
                            <div className="stat-container experience">
                                <span className="stat">+{stats.experience}</span>
                                <span className="stat-label">{t('home.yearsExperience')}</span>
                            </div>
                            <div className="stat-container nb-projects">
                                <span className="stat">+{stats.projects}</span>
                                <span className="stat-label">{t('home.completedProjects')}</span>
                            </div>
                            <div className="stat-container nb-clients">
                                <span className="stat">+{stats.contributions}</span>
                                <span className="stat-label">{t('home.collaborativeProjects')}</span>
                            </div>
                        </div>
                        
                        <div className="cta-container">
                            <div className="cta-flex">
                                {/* Premier bouton : View my work */}
                                <button className="btn-primary" type="button"
                                    onClick={() => internalLinkNavigation('projects')}
                                >
                                    {t('home.viewMyWork')}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="arrow-down" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        aria-hidden="true"
                                    >
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                </button>

                                {/* Deuxième bouton (Lien d'ancre) : Learn more */}
                                <a href="#about" className="btn-secondary">
                                    {t('home.learnMore')}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="picture">
                        <div className="image-container">
                            <img src={profile} alt={t('home.profilePictureAlt')} />
                        </div>
                    </div>
                </div>

            </div>           
        </section>
    );
}

export default Home;