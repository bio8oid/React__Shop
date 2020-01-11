import { combineReducers } from 'redux'
import cartReducers from './cartReducers'
// import itemsReducers from './itemsReducers'
import describedProductReducers from './describedProductReducers'
import discountCodeReducers from './discountCodeReducers'
import filteringReducers from './filteringReducers'
import paginationReducers from './paginationReducers'
import sortingReducers from './sortingReducers'
import toggleMenuReducer from './toggleMenuReducer'

const reducer = combineReducers({
    // items: cartReducers,
    // addedItems: [],
    // indicatorItems: 0,
    // total: discountCodeReducers,
    // clickedProduct: [],
    // isOpen: false,
    // page: paginationReducers,
    // text: ""

    // addedItems: itemsReducers,
    // indicatorItems: itemsReducers,
    // total: itemsReducers, 

    // items: itemsReducers,
    // describedProduct: describedProductReducers,
    // text: discountCodeReducers,
    // page: paginationReducers,
    // isOpen: toggleMenuReducer
    

    cartReducers,
    filteringReducers,
    sortingReducers,
    paginationReducers,
    toggleMenuReducer,
    discountCodeReducers,
    describedProductReducers


});
  
export default reducer