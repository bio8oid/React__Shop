import { combineReducers } from 'redux'
import itemsReducers from './itemsReducers'
import inputCodeReducers from './inputCodeReducers'
import toggleMenuReducer from './toggleMenuReducer'

const reducer = combineReducers({
    itemsReducers,
    toggleMenuReducer,
    inputCodeReducers
});
  
export default reducer