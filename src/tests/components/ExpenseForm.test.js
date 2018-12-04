import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/fixtures';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';


test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseForm correctly with props provided', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0);

    expect(wrapper).toMatchSnapshot();
})


test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on textArea change', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
        target: { value }
    })

    expect(wrapper.state('note')).toBe('New Note')
})



test('should set the amount state correctly on valid input', () => {
    const value = '125.025'

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe('')
})

test('should set the amount state correctly on valid input', () => {
    const value = '123.02'

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe(value)
})