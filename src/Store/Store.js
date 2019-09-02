import '../style.scss';
import cartReducer from '../reducers/reducers';
import { createStore } from 'redux';

const store = createStore(cartReducer);

  export default store;