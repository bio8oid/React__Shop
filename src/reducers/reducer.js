import { combineReducers } from 'redux'
import itemsReducers from './itemsReducers'
import inputCodeReducers from './inputCodeReducers'
import paginationReducers from './paginationReducers'
import toggleMenuReducer from './toggleMenuReducer'

const reducer = combineReducers({
    itemsReducers,
    paginationReducers,
    toggleMenuReducer,
    inputCodeReducers
});
  
export default reducer