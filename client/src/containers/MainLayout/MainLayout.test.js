import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from './MainLayout';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<MainLayout store={store} />);
});