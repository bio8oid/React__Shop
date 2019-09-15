import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

it('renders without crashing', () => {
  shallow(<Cart />);
});