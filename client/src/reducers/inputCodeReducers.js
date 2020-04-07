import { INPUT_HANDLE } from '../actions/inputCodeAction'

const initState = {
    text: ""
}

const inputCodeReducers = (state = initState, action) => {

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

export default inputCodeReducers