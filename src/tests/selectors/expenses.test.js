import SelectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/fixtures';

test('Should filter by text', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = SelectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = SelectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = SelectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: moment(0),
        endDate: undefined
    };
    const result = SelectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = SelectExpenses(expenses, filters);

    expect(result).toEqual([expenses[1], expenses[0]])
})