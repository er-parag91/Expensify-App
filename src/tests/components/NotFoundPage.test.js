import NotFoundPage from './../../components/NotFoundPage';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should render a NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})