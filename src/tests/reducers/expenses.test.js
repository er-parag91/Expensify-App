import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/fixtures';


test('should set expensesReducer by default', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual([])
})

test('should remove expense by provided id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-5'
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses)
})

test('should add expense to state', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Beer',
            amount: 895400,
            createdAt: 10000,
            note: ''
        }
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, action.expense])
})

test('should edit the expenses with respective id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'Parag'
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('Parag')
})

test('should edit the expenses with respective id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '6',
        updates: {
            description: 'Parag'
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})