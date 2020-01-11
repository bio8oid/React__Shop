import {
    SORT_PRICE_ASC,
    SORT_PRICE_DESC,
    SORT_NAME_ASC,
    SORT_NAME_DESC,
    
} from '../actions/actions'

import products from '../data/dataCopy.json';

const initState = {
    items: products,
}
  
const sortingReducers = (state = initState, action) => {

    if (action.type === SORT_PRICE_ASC) {
        var sortedByPriceAsc = state.items.sort((a, b) => (a.price - b.price))
        return {
            ...state,
            items: [...sortedByPriceAsc]
        }
    }

    if (action.type === SORT_PRICE_DESC) {
        let sortedByPriceDesc = state.items.sort((a, b) => (b.price - a.price))
        return {
            ...state,
            items: [...sortedByPriceDesc]
        }
    }

    if (action.type === SORT_NAME_ASC) {
        let sortedByNameAsc = state.items.sort((a, b) => a.title.localeCompare(b.title))
        return {
            ...state,
            items: [...sortedByNameAsc]
        }
    }

    if (action.type === SORT_NAME_DESC) {
        let sortedByNameDesc = state.items.sort((a, b) => b.title.localeCompare(a.title))
        return {
            ...state,
            items: [...sortedByNameDesc]
        }
    }

    else {
        return state
    }
}

export default sortingReducers