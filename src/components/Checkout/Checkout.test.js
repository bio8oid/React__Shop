import React from 'react';
import { shallow } from 'enzyme';
import Checkout from './Checkout';

it('renders without crashing', () => {
  shallow(<Checkout />);
});