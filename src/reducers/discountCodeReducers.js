import {  DISCOUNT_HANDLE, INPUT_HANDLE } from '../actions/actions'

const initState = {
    total: 0,
    text: ""
}

const discountCodeReducers = (state = initState, action) => {

    if (action.type === DISCOUNT_HANDLE) {
        let discountedValue = (state.total - (state.total * 10 / 100).toFixed(0))
        return {
            ...state,
            total: discountedValue
        }
    }

    if (action.type === INPUT_HANDLE) {
        let code = action.event
        return {
            ...state,
            text: code
        }
    }

    else {
        return state
    }
}

export default discountCodeReducers