import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

it('renders without crashing', () => {
  shallow(<Product />);
});