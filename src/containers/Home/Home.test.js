import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Home store={store} />);
});