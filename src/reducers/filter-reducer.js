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
    RESET_FILTERS,

} from '../actions/actions'

import products from '../data/data.json';

const initState = {
    items: products,
}

const FilterReducer = (state = initState, action) => {

    if (action.type === FILTER_TYPE_RISERS) {
        let filteredRisers = initState.items.filter(x => x.tag === 'risers');
        let notEmpty = state.items.length !== products.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredRisers]
            }
        }
        return {
            ...state,
            items: [...filteredRisers]
        }
    }

    if (action.type === RISERS_REMOVED) {
        let risersRemoved = state.items.filter(x => x.tag !== 'risers');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'risers').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: risersRemoved
        }
    }

    if (action.type === FILTER_TYPE_LIMBS) {
        let filteredLimbs = initState.items.filter(x => x.tag === 'limbs');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredLimbs]
            }
        }
        return {
            ...state,
            items: filteredLimbs
        }
    }

    if (action.type === LIMBS_REMOVED) {
        let limbsRemoved = state.items.filter(x => x.tag !== 'limbs');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'limbs').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: limbsRemoved
        }
    }

    if (action.type === FILTER_TYPE_TABS) {
        let filteredTabs = initState.items.filter(x => x.tag === 'tabs');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredTabs]
            }
        }
        return {
            ...state,
            items: filteredTabs
        }
    }

    if (action.type === TABS_REMOVED) {
        let tabsRemoved = state.items.filter(x => x.tag !== 'tabs');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'tabs').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: tabsRemoved
        }
    }

    if (action.type === FILTER_TYPE_STABILIZERS) {
        let filteredStabilizers = initState.items.filter(x => x.tag === 'stabilizers');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredStabilizers]
            }
        }
        return {
            ...state,
            items: filteredStabilizers
        }
    }

    if (action.type === STABILIZERS_REMOVED) {
        let stabilizersRemoved = state.items.filter(x => x.tag !== 'stabilizers');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'stabilizers').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: stabilizersRemoved
        }
    }

    if (action.type === FILTER_TYPE_ARROWS) {
        let filteredArrows = initState.items.filter(x => x.tag === 'arrows');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredArrows]
            }
        }
        return {
            ...state,
            items: filteredArrows
        }
    }

    if (action.type === ARROWS_REMOVED) {
        let arrowsRemoved = state.items.filter(x => x.tag !== 'arrows');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'arrows').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: arrowsRemoved
        }
    }

    if (action.type === FILTER_TYPE_SIGHTS) {
        let filteredSights = initState.items.filter(x => x.tag === 'sights');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredSights]
            }
        }
        return {
            ...state,
            items: filteredSights
        }
    }

    if (action.type === SIGHTS_REMOVED) {
        let sightsRemoved = state.items.filter(x => x.tag !== 'sights');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'sights').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: sightsRemoved
        }
    }

    if (action.type === FILTER_TYPE_STANDS) {
        let filteredStands = initState.items.filter(x => x.tag === 'stands');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredStands]
            }
        }
        return {
            ...state,
            items: filteredStands
        }
    }

    if (action.type === STANDS_REMOVED) {
        let standsRemoved = state.items.filter(x => x.tag !== 'stands');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'stands').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: standsRemoved
        }
    }

    if (action.type === FILTER_TYPE_ARMGUARDS) {
        let filteredArmguards = initState.items.filter(x => x.tag === 'armguards');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredArmguards]
            }
        }
        return {
            ...state,
            items: filteredArmguards
        }
    }

    if (action.type === ARMGUARDS_REMOVED) {
        let armguardsRemoved = state.items.filter(x => x.tag !== 'armguards');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'armguards').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: armguardsRemoved
        }
    }

    if (action.type === RESET_FILTERS) {
        var sortedById = initState.items.sort((a, b) => (a.id - b.id))
        return {
            ...state,
            items: sortedById
        }
    }
        return state
}

export default FilterReducer