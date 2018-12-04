import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/fixtures';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

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

test('should call onSubmit props for valid form submission', () => {
    const onSubmitSpy = jest.fn();

    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt.valueOf()
    })
})

test('should set new date onDateChange', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)

})

test('should set the focused state correctly', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect((wrapper).state('calanderFocused')).toBe(focused)
})

