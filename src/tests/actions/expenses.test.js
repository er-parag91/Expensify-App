import {
    addExpense,
    removeExpense,
    editExpense
} from './../../actions/expenses';


test('should setup the removeExpense object', () => {
    const object = removeExpense({
        id: 'abc123'
    });

    expect(object).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})


test('should setup the editExpense object', () => {
    const object = editExpense('id', {
        note: 'updates'
    });

    expect(object).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'id',
        updates: {
            note: 'updates'
        }
    })
})

test('should setup the addExpense object with provided data', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'Last month rent'
    }

    const object = addExpense(expenseData);

    expect(object).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'Last month rent',
            id: expect.any(String)
        }
    })
})


test('should setup the addExpense object with default value', () => {
    const object = addExpense();

    expect(object).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
})