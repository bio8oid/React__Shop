import React from 'react';
import { shallow } from 'enzyme';
import Selector from './Selector';

it('renders without crashing', () => {
  shallow(<Selector />);
});