import { ExpenseList } from '../../components/ExpenseList';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/fixtures';
import toJSON from 'enzyme-to-json';



test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
})

