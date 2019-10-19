import React from 'react';
import { shallow } from 'enzyme';
import Faq from './Faq';
import store from '../../store/store';


it('renders without crashing', () => {
  shallow(<Faq store={store} />);
});