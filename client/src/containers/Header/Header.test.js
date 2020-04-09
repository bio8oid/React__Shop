import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Header store={store} />);
});