import {
    SORT_PRICE_ASC,
    SORT_PRICE_DESC,
    SORT_NAME_ASC,
    SORT_NAME_DESC,
    
} from '../actions/actions'

import products from '../data/dataCopy.json';

const initState = {
    itemsSorted: products,
}
  
const SortingReducers = (state = initState, action) => {

    if (action.type === SORT_PRICE_ASC) {
        var sortedByPriceAsc = state.itemsSorted.sort((a, b) => (a.price - b.price))
        return {
            ...state,
            itemsSorted: [...sortedByPriceAsc]
        }
    }

    if (action.type === SORT_PRICE_DESC) {
        let sortedByPriceDesc = state.itemsSorted.sort((a, b) => (b.price - a.price))
        return {
            ...state,
            itemsSorted: [...sortedByPriceDesc]
        }
    }

    if (action.type === SORT_NAME_ASC) {
        let sortedByNameAsc = state.itemsSorted.sort((a, b) => a.title.localeCompare(b.title))
        return {
            ...state,
            itemsSorted: [...sortedByNameAsc]
        }
    }

    if (action.type === SORT_NAME_DESC) {
        let sortedByNameDesc = state.itemsSorted.sort((a, b) => b.title.localeCompare(a.title))
        return {
            ...state,
            itemsSorted: [...sortedByNameDesc]
        }
    }

    else {
        return state
    }
}

export default SortingReducers