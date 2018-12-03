import moment from 'moment';
import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';


test('should set a Set start date action object', () => {
    const object = setStartDate(moment(0));

    expect(object).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})


test('should set set end date action object', () => {
    const object = setEndDate(moment(0));

    expect(object).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should set set text filter action object', () => {
    const object = setTextFilter('Rent');

    expect(object).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })
})

test('should set set text filter default action object', () => {
    const object = setTextFilter();

    expect(object).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should set sort by date action object correctly', () => {
    const object = sortByDate();

    expect(object).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should set sort by date action object correctly', () => {
    const object = sortByAmount();

    expect(object).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})