import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Cart store={store} />);
});