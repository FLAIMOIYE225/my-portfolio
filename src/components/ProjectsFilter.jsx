import React, { useState } from 'react';
import './ProjectsFilter.css';
import { filterOptions } from '../constants/projects';
import { useTranslation } from 'react-i18next';

const ProjectsFilter = ({search, setSearch, filters=[], setFilters}) => {
    const { t } = useTranslation();

    const removeArrayElmt = (array=[], elmt) => {
        return array.filter((item) => item != elmt)
    }

    const handleOptionClick = (id) => {
        if (id == 'all') setFilters(['all'])
        else if (!filters.includes(id)) setFilters([...removeArrayElmt(filters, 'all'), id])
        else setFilters(removeArrayElmt(filters, id))
    }

    return (
        <div className="filter-wrapper">
            {/* Barre de recherche + Bouton Filtre principal */}
            <div className="search-bar-container">
                <div className="search-input-group">
                    <label htmlFor="project-search" className="sr-only">
                        {t('projects.searchLabel')}
                    </label>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        className="search-icon" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        id="project-search"
                        type="search" 
                        placeholder={t('projects.searchPlaceholder')} 
                        className="search-input"
                    />
                </div>

                <button className="btn-filter-toggle" type="button" aria-expanded="false" aria-controls="filter-chips">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="sliders-icon" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        aria-hidden="true"
                    >
                        <line x1="21" x2="14" y1="4" y2="4"></line>
                        <line x1="10" x2="3" y1="4" y2="4"></line>
                        <line x1="21" x2="12" y1="12" y2="12"></line>
                        <line x1="8" x2="3" y1="12" y2="12"></line>
                        <line x1="21" x2="16" y1="20" y2="20"></line>
                        <line x1="12" x2="3" y1="20" y2="20"></line>
                        <line x1="14" x2="14" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="10" y2="14"></line>
                        <line x1="16" x2="16" y1="18" y2="22"></line>
                    </svg>
                    <span className="filter-label">{t('projects.filterButton')}</span>
                </button>
            </div>

            {/* Jetons de filtres (Pills) */}
            <div id="filter-chips" className="filter-pills-container" role="radiogroup" aria-label={t('projects.filterGroupLabel')}>
                <button className={`pill pill-${filters.includes('all') ? 'active': 'inactive'}`} type="button" role="radio" aria-checked="true"
                    onClick={() => handleOptionClick('all')}
                >
                    {t('projects.filters.all')}
                </button>
                {filterOptions.map((opt, index) => {
                    return (
                        <button key={`${opt.id}-${index}`} className={`pill pill-${filters.includes(opt.id) ? 'active': 'inactive'}`} type="button" role="radio" aria-checked="true"
                            onClick={() => handleOptionClick(opt.id)}
                        >
                            {t(opt.translationKey)}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default ProjectsFilter;