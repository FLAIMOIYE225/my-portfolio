import ProjectsFilter from "../components/ProjectsFilter";
import './Projects.css';
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import { useState, useMemo } from "react";
import { filterProjects } from "../services/projectsService";
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    // const [projects, setProjects] = useState(projectsData);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState(['all'])

    const projects = useMemo(() => {
        // console.log(filters)
        return filterProjects(projectsData, search, filters);
    }, [search, filters]);

    return (
        <section id="projects" className="bg-[#f4f1e9] py-20">

            <div className="projects">

                <div className="section-header-container">
                    <span className="section-label">{t('projects.sectionLabel')}</span>
                    <p className="section-description">
                        {t('projects.description')}
                    </p>
                </div>

                <ProjectsFilter
                    search={search}
                    setSearch={setSearch}
                    filters={filters}
                    setFilters={setFilters}
                />

                {/* <div className="card-container row"> */}
                <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* On boucle sur le tableau de données avec .map() */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>                
            </div>

        </section>
    );
}

export default Projects;