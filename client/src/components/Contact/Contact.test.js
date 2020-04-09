import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Contact  store={store} />);
});