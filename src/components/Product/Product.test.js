import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Product store={store} />);
});