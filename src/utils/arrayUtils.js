// /c:/Users/flaim/Documents/DEV_SPACE/PROJECTS/ACTIVES/school-accounting-app/src/utils/arrayUtils.js

/**
 * Met à jour un élément d'un tableau d'objets en comparant par clé.
 *
 * Le tableau est renvoyé immutablement (nouveau tableau). La mise à jour
 * remplace/merge l'objet existant par le nouvel objet fourni (shallow merge).
 *
 * @param {Array<Object>} array - Tableau d'objets à traiter (ex: [{id: '1', name: 'A'}, ...]).
 * @param {string} [key='id'] - Nom de la propriété utilisée pour trouver l'élément (ex: "id").
 * @param {Object} newItem - Objet contenant au minimum la propriété `key` et les champs à mettre à jour.
 *                            Exemple: { id: '1', name: 'Nouvel intitulé' }.
 * @returns {Array<Object>} Nouveau tableau avec l'élé­ment mis à jour (si trouvé), sinon le tableau original.
 *
 * @example
 * const students = [{id: '1', name: 'Alice'}, {id: '2', name: 'Bob'}];
 * const updated = updateByKey(students, 'id', {id: '2', name: 'Bobby'});
 * // => [{id:'1', name:'Alice'}, {id:'2', name:'Bobby'}]
 */
export const updateByKey = (array = [], key = 'id', newItem = {}) => {
    if (!Array.isArray(array)) return array;
    if (newItem == null || !(key in newItem)) return array;

    return array.map(element =>
        element && element[key] === newItem[key] ? { ...element, ...newItem } : element
    );
};

/**
 * Supprime un/les élément(s) d'un tableau d'objets en comparant par clé.
 *
 * Le tableau est renvoyé immutablement. La comparaison utilise l'égalité stricte (===).
 *
 * @param {Array<Object>} array - Tableau d'objets à filtrer.
 * @param {string} [key='id'] - Nom de la propriété utilisée pour comparer (ex: "id").
 * @param {*} matchValue - Valeur recherchée sur la propriété `key`; les éléments correspondants sont supprimés.
 * @returns {Array<Object>} Nouveau tableau sans les éléments correspondants.
 *
 * @example
 * const students = [{id: '1', name: 'Alice'}, {id: '2', name: 'Bob'}];
 * const filtered = removeByKey(students, 'id', '1');
 * // => [{id:'2', name:'Bob'}]
 */
export const removeByKey = (array = [], key = 'id', matchValue) => {
    if (!Array.isArray(array)) return array;
    return array.filter(element => !(element && element[key] === matchValue));
};

export const normalizeStringsToLower = (list = []) => list.map(item => item.toLowerCase());