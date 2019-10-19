import React from 'react';
import { shallow } from 'enzyme';
import Terms from './Terms';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Terms store={store} />);
});