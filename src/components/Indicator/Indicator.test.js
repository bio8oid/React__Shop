import React from 'react';
import { shallow } from 'enzyme';
import Indicator from './Indicator';

it('renders without crashing', () => {
  shallow(<Indicator />);
});