import {
    TOGGLE_MENU,
    SET_PAGE1,
    SET_PAGE2,
    SET_PAGE3,
    SET_PAGE4,
    SET_PAGE5,
    SET_NEXT_PAGE,
    SET_PREVIOUS_PAGE

} from '../actions/actions'

const initState = {
    isOpen: false,
    page: 1
}

const PaginationReducer = (state = initState, action) => {

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

    if (action.type === SET_PAGE1) {
        return {
            ...state,
            page: initState.page
        }
    }

    if (action.type === SET_PAGE2) {
        return {
            ...state,
            page: 2
        }
    }

    if (action.type === SET_PAGE3) {
        return {
            ...state,
            page: 3
        }
    }

    if (action.type === SET_PAGE4) {
        return {
            ...state,
            page: 4
        }
    }

    if (action.type === SET_PAGE5) {
        return {
            ...state,
            page: 5
        }
    }

    if (action.type === SET_NEXT_PAGE) {
        if (state.page === 5) {
            return {
                ...state,
                page: 5
            }
        }
        return {
            ...state,
            page: state.page + 1
        }
    }

    if (action.type === SET_PREVIOUS_PAGE) {
        if (state.page === 1) {
            return {
                ...state,
                page: 1
            }
        }
        return {
            ...state,
            page: state.page - 1
        }
    }
        return state
}

export default PaginationReducer