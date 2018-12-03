import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set default state correctly', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    });

    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, {
        type: 'SORT_BY_DATE'
    });

    expect(state.sortBy).toEqual('date')
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })

    expect(state.text).toBe('Rent')
})

test('should set the start date', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        date: moment().startOf('month')
    })

    expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should set the start date', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        date: moment().endOf('month')
    })

    expect(state.endDate).toEqual(moment().endOf('month'))
})