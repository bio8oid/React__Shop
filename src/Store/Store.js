import '../style.css';
import cartReducer from '../reducers/cartReducer';
import { createStore } from 'redux';

const store = createStore(cartReducer);

  export default store;