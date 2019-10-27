// // import Reducers from '../reducers/reducers';
// import { combineReducers, createStore } from 'redux';

// import CartReducer from '../reducers/cart-reducer';
// import SortReducer from '../reducers/sort-reducer';
// import FilterReducer from '../reducers/filter-reducer';
// import PaginationReducer from '../reducers/pagination-reducer';

// const Reducers = combineReducers({
//     items: CartReducer, SortReducer,
//     FilterReducer,
//     addedItems: CartReducer,
//     total: CartReducer,
//     clickedProduct: CartReducer,
//     page: PaginationReducer,
//     // isOpen: PaginationReducer,
// })

// const store = createStore(Reducers);

// export default store;


import Reducers from '../reducers/reducers';
import { createStore } from 'redux';

const store = createStore(Reducers);

export default store;