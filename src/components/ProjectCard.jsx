import React from 'react';
import './ProjectCard.css';
import { getAssetUrl } from '../utils/assetsUtils';
import tehStack from '../data/tech-stack.json'
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();
    // Astuce pour charger dynamiquement une image depuis le dossier src/assets/


    return (
        <div className="project-card-wrapper">
            <div className="project-card-tilt">
                <article aria-label={t('projects.projectAriaLabel', { name: project.name })}>
                    
                    {/* ZONE SUPÉRIEURE : IMAGE ET BOUTONS */}
                    <div className="card-media">
                        <img 
                            src={getAssetUrl(project.image)} 
                            alt={t('projects.projectImageAlt', { name: project.name })} 
                            className="project-img" 
                            loading="lazy"
                        />
                        
                        {/* Bouton Favoris (Étoile) */}
                        <button className="btn-favorite" aria-label={t('projects.addToFavorites')} aria-pressed="false" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                        </button>
                        
                        {/* Lien Externe qui enveloppe l'overlay pour rendre le clic fonctionnel */}
                        <a href={project.link} target="_blank" rel="noreferrer" className="card-hover-overlay" aria-label={t('projects.viewProjectAriaLabel', { name: project.name })}>
                            <div className="external-link-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>
                            </div>
                        </a>
                    </div>

                    {/* ZONE INFÉRIEURE : INFOS & TEXTES */}
                    <div className="card-body">
                        <div className="card-header-row">
                            <h3 className="project-title">{project.name}</h3>
                            {/* On affiche la première technologie principale en haut à droite */}
                            <span className="main-tag">{project.technologie[0].name}</span>
                        </div>
                        
                        <p className="project-desc" title={project.description}>{project.description}</p>
                        
                        {/* Liste de toutes les technologies utilisées */}
                        <div className="tech-tags-list" role="list" aria-label={t('projects.technologiesUsed')}>
                            {project.technologie.map((tech, index) => (
                                <a href={tehStack?.[tech.id]?.link || ""} target='_blank'  key={index} className="tech-pill" role="listitem">{tech.name}</a>
                            ))}
                        </div>
                    </div>

                </article>
                <div className="card-glare" aria-hidden="true"></div>
            </div>
        </div>
    );
}

export default ProjectCard;