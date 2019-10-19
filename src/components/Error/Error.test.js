import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Error  store={store} />);
});