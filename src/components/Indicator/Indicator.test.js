import React from 'react';
import { shallow } from 'enzyme';
import Indicator from './Indicator';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Indicator store={store} />);
});