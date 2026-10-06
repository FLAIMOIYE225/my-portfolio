import { normalizeStringsToLower } from "../utils/arrayUtils"


// trouver un meilleur nom adpater à ce que fait la fonction
const isSearchMatch = (project={}, search='') => {
    search = search.toLocaleLowerCase()
    let matched = false

    // check the name
    if (project.name.toLowerCase().includes(search)) return true
    // Check in tags
    for (let tag of project.tags) {
        if (tag.toLowerCase().includes(search)) {
            matched = true
        }
    }
    // Check in technologie
    for (let techObj of project.technologie) {
        if (techObj.name.toLowerCase().includes(search)) {
            matched = true
        }
    }

    return matched
}

const isFiltersMatch = (project, filters = []) => {
    if (filters.includes('all')) return true;
    return filters.every(filter =>
        normalizeStringsToLower(project.tags).includes(filter.toLowerCase())
    );
};


export const filterProjects = (projects=[], search='', filters=[]) => {

    return projects.filter((project) => {
        return isSearchMatch(project, search) && isFiltersMatch(project, filters)
    })
}