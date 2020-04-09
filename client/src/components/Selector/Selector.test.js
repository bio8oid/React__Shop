import React from 'react';
import { shallow } from 'enzyme';
import Selector from './Selector';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Selector store={store} />);
});