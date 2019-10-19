import React from 'react';
import { shallow } from 'enzyme';
import Checkout from './Checkout';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Checkout store={store} />);
});