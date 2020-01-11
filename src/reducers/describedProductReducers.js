import { PASS_ID } from '../actions/actions'
// import products from '../data/dataCopy.json';

const initState = {
    describedProduct: [],
}

const describedProductReducers = (state = initState, action) => {

    if (action.type === PASS_ID) {
        let describedProduct = state.items.find(item => item.id === action.id)
        return {
            ...state,
            describedProduct: [describedProduct]
        }
    }

    else {
        return state
    }
}

export default describedProductReducers