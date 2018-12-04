import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';


let setTextFilter, setStartDate, sortByAmount, sortByDate, setEndDate, wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
})

test('should render expenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render expenseListFilter altdata correctly', () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot();
})


test('should handle text change', () => {
    const value = 'Renting';
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

//should sort by date
test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})


//should sort by amount

test('should sort by date', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})
//should handle date changes

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).subtract(8, 'years');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate, endDate
    })

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
//should handler focus changes

test('should handler focus changes', () => {
    const calanderFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calanderFocused);
    expect(wrapper.state('calanderFocused')).toBe(calanderFocused);
})