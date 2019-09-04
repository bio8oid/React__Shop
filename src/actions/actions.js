export const ADD_TO_CART = 'ADD_TO_CART';
export const PASS_ID = 'PASS_ID';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const SORT_PRICE_ASC = 'SORT_PRICE_ASC';
export const SORT_PRICE_DESC = 'SORT_PRICE_DESC';
export const SORT_NAME_ASC = 'SORT_NAME_ASC';
export const SORT_NAME_DESC = 'SORT_NAME_DESC';
export const UPDATE_LIST = 'UPDATE_LIST';
export const FILTER_TYPE_RISERS = 'FILTER_TYPE_RISERS';
export const RISERS_REMOVED = 'RISERS_REMOVED';
export const FILTER_TYPE_LIMBS = 'FILTER_TYPE_LIMBS';
export const LIMBS_REMOVED = 'LIMBS_REMOVED';
export const FILTER_TYPE_TABS = 'FILTER_TYPE_TABS';
export const TABS_REMOVED = 'TABS_REMOVED';
export const FILTER_TYPE_STABILIZERS = 'FILTER_TYPE_STABILIZERS';
export const STABILIZERS_REMOVED = 'STABILIZERS_REMOVED';
export const FILTER_TYPE_ARROWS = 'FILTER_TYPE_ARROWS';
export const ARROWS_REMOVED = 'ARROWS_REMOVED';
export const FILTER_TYPE_SIGHTS = 'FILTER_TYPE_SIGHTS';
export const SIGHTS_REMOVED = 'SIGHTS_REMOVED';
export const FILTER_TYPE_STANDS = 'FILTER_TYPE_STANDS';
export const STANDS_REMOVED = 'STANDS_REMOVED';
export const FILTER_TYPE_ARMGUARDS = 'FILTER_TYPE_ARMGUARDS';
export const ARMGUARDS_REMOVED = 'ARMGUARDS_REMOVED';
export const CHECKBOX_UP = 'CHECKBOX_UP';
export const CHECKBOX_DOWN = 'CHECKBOX_DOWN';
export const RESET_FILTERS = 'RESET_FILTERS';
export const TOGGLE_MENU = 'TOGGLE_MENU';


export const addToCart = id =>{
    return{
        type: ADD_TO_CART,
        id
    }
}

export const passID = id =>{
    return{
        type: PASS_ID,
        id
    }
}

export const removeItem = id =>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity = id =>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = id =>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const updateList = () =>{
    return{
        type: UPDATE_LIST,
    }
}

export const sortedByPriceAsc = () =>{
    return{
        type: SORT_PRICE_ASC,
    }
}

export const sortedByPriceDesc = () =>{
    return{
        type: SORT_PRICE_DESC,
    }
}

export const sortedByNameAsc = () =>{
    return{
        type: SORT_NAME_ASC,
    }
}

export const sortedByNameDesc = () =>{
    return{
        type: SORT_NAME_DESC,
    }
}

export const filteredByTypeRisers = () =>{
    return{
        type: FILTER_TYPE_RISERS,
    }
}
export const risersRemoved = () =>{
    return{
        type: RISERS_REMOVED,
    }
}

export const filteredByTypeLimbs = () =>{
    return{
        type: FILTER_TYPE_LIMBS,
    }
}
export const limbsRemoved = () =>{
    return{
        type: LIMBS_REMOVED,
    }
}

export const filteredByTypeTabs = () =>{
    return{
        type: FILTER_TYPE_TABS,
    }
}
export const tabsRemoved = () =>{
    return{
        type: TABS_REMOVED,
    }
}

export const filteredByTypeStabilizers = () =>{
    return{
        type: FILTER_TYPE_STABILIZERS,
    }
}
export const stabilizersRemoved = () =>{
    return{
        type: STABILIZERS_REMOVED,
    }
}

export const filteredByTypeArrows = () =>{
    return{
        type: FILTER_TYPE_ARROWS,
    }
}
export const arrowsRemoved = () =>{
    return{
        type: ARROWS_REMOVED,
    }
}

export const filteredByTypeSights = () =>{
    return{
        type: FILTER_TYPE_SIGHTS,
    }
}
export const sightsRemoved = () =>{
    return{
        type: SIGHTS_REMOVED,
    }
}

export const filteredByTypeStands = () =>{
    return{
        type: FILTER_TYPE_STANDS,
    }
}
export const standsRemoved = () =>{
    return{
        type: STANDS_REMOVED,
    }
}

export const filteredByTypeArmguards = () =>{
    return{
        type: FILTER_TYPE_ARMGUARDS,
    }
}
export const armguardsRemoved = () =>{
    return{
        type: ARMGUARDS_REMOVED,
    }
}

export const resetFilters = () =>{
    return{
        type: RESET_FILTERS,
    }
}

export const toggleMenu = () =>{
    return{
        type: TOGGLE_MENU,
    }
}
