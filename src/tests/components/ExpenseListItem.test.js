import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/fixtures';
import toJSON from 'enzyme-to-json';

test('should render a ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})