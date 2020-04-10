import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Navbar store={store} />);
});