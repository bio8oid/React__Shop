import { TOGGLE_MENU } from '../actions/toggleMenuAction'

const initState = {
    isOpen: false,
}

const toggleMenuReducers = (state = initState, action) => {

    if (action.type === TOGGLE_MENU) {
        let open = state.isOpen === false
        if (open) {
            return {
                ...state,
                isOpen: !initState.isOpen
            }
        }
        return {
            ...state,
            isOpen: initState.isOpen
        }
    }

    else {
        return state
    }
}

export default toggleMenuReducers