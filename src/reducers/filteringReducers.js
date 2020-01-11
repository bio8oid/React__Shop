import {
    FILTER_TYPE_RISERS,
    RISERS_REMOVED,
    FILTER_TYPE_LIMBS,
    LIMBS_REMOVED,
    FILTER_TYPE_TABS,
    TABS_REMOVED,
    FILTER_TYPE_STABILIZERS,
    STABILIZERS_REMOVED,
    FILTER_TYPE_ARROWS,
    ARROWS_REMOVED,
    FILTER_TYPE_SIGHTS,
    SIGHTS_REMOVED,
    FILTER_TYPE_STANDS,
    STANDS_REMOVED,
    FILTER_TYPE_ARMGUARDS,
    ARMGUARDS_REMOVED,
    RESET_FILTERS

} from '../actions/actions'

import products from '../data/dataCopy.json';

const initState = {
    itemsFiltered: products
}

const FilteringReducers = (state = initState, action) => {

    if (action.type === FILTER_TYPE_RISERS) {
        let filteredRisers = initState.itemsFiltered.filter(x => x.tag === 'risers');
        let notEmpty = state.itemsFiltered.length !== products.length
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredRisers],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: [...filteredRisers]
        }
    }

    if (action.type === RISERS_REMOVED) {
        let risersRemoved = state.itemsFiltered.filter(x => x.tag !== 'risers');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'risers').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: risersRemoved
        }
    }

    if (action.type === FILTER_TYPE_LIMBS) {
        let filteredLimbs = initState.itemsFiltered.filter(x => x.tag === 'limbs');
        let notEmpty = state.itemsFiltered.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredLimbs],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: filteredLimbs
        }
    }

    if (action.type === LIMBS_REMOVED) {
        let limbsRemoved = state.itemsFiltered.filter(x => x.tag !== 'limbs');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'limbs').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: limbsRemoved
        }
    }

    if (action.type === FILTER_TYPE_TABS) {
        let filteredTabs = initState.itemsFiltered.filter(x => x.tag === 'tabs');
        let notEmpty = state.itemsFiltered.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredTabs],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: filteredTabs
        }
    }

    if (action.type === TABS_REMOVED) {
        let tabsRemoved = state.itemsFiltered.filter(x => x.tag !== 'tabs');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'tabs').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: tabsRemoved
        }
    }

    if (action.type === FILTER_TYPE_STABILIZERS) {
        let filteredStabilizers = initState.itemsFiltered.filter(x => x.tag === 'stabilizers');
        let notEmpty = state.itemsFiltered.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredStabilizers],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: filteredStabilizers
        }
    }

    if (action.type === STABILIZERS_REMOVED) {
        let stabilizersRemoved = state.itemsFiltered.filter(x => x.tag !== 'stabilizers');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'stabilizers').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: stabilizersRemoved
        }
    }

    if (action.type === FILTER_TYPE_ARROWS) {
        let filteredArrows = initState.itemsFiltered.filter(x => x.tag === 'arrows');
        let notEmpty = state.itemsFiltered.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredArrows],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: filteredArrows
        }
    }

    if (action.type === ARROWS_REMOVED) {
        let arrowsRemoved = state.itemsFiltered.filter(x => x.tag !== 'arrows');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'arrows').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: arrowsRemoved
        }
    }

    if (action.type === FILTER_TYPE_SIGHTS) {
        let filteredSights = initState.itemsFiltered.filter(x => x.tag === 'sights');
        let notEmpty = state.itemsFiltered.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredSights],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: filteredSights
        }
    }

    if (action.type === SIGHTS_REMOVED) {
        let sightsRemoved = state.itemsFiltered.filter(x => x.tag !== 'sights');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'sights').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: sightsRemoved
        }
    }

    if (action.type === FILTER_TYPE_STANDS) {
        let filteredStands = initState.itemsFiltered.filter(x => x.tag === 'stands');
        let notEmpty = state.itemsFiltered.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredStands],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: filteredStands
        }
    }

    if (action.type === STANDS_REMOVED) {
        let standsRemoved = state.itemsFiltered.filter(x => x.tag !== 'stands');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'stands').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: standsRemoved
        }
    }

    if (action.type === FILTER_TYPE_ARMGUARDS) {
        let filteredArmguards = initState.itemsFiltered.filter(x => x.tag === 'armguards');
        let notEmpty = state.itemsFiltered.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                itemsFiltered: [...state.itemsFiltered, ...filteredArmguards],
            }
        }
        return {
            ...state,
            page: 1,
            itemsFiltered: filteredArmguards
        }
    }

    if (action.type === ARMGUARDS_REMOVED) {
        let armguardsRemoved = state.itemsFiltered.filter(x => x.tag !== 'armguards');
        let Empty = state.itemsFiltered.length === state.itemsFiltered.filter(x => x.tag === 'armguards').length;
        if (Empty) {
            return {
                ...state,
                itemsFiltered: initState.itemsFiltered
            }
        }
        return {
            ...state,
            itemsFiltered: armguardsRemoved
        }
    }

    if (action.type === RESET_FILTERS) {
        let sortedById = initState.itemsFiltered.sort((a, b) => (a.id - b.id))
        return {
            ...state,
            itemsFiltered: sortedById
        }
    }

    else {
        return state
    }
}

export default FilteringReducers