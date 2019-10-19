import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Footer store={store} />);
});