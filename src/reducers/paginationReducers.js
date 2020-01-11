import { SET_PAGE } from '../actions/actions'

const initState = {
    page: 1
}

const paginationReducers = (state = initState, action) => {

    if (action.type === SET_PAGE) {
        if (action.id === "right") {
            return {
                ...state,
                page: state.page + 1
            }
        }
        if (action.id === "left") {
            return {
                ...state,
                page: state.page - 1
            }
        }
        if (action.id === "") {
            return {
                ...state,
                page: state.page
            }
        }
        return {
            ...state,
            page: Number(action.id)
        }
    }

    else {
        return state
    }
}

export default paginationReducers