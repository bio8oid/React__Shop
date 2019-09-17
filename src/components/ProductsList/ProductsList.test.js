import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';
import { Provider } from 'react-redux';
import store from '../../Store/Store';


it('renders without crashing', () => {
  shallow(<Provider store={store}><ProductsList /></Provider>);
});