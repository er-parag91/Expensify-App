import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map(expense => (
            <ExpenseListItem {...expense} key={expense.id}></ExpenseListItem>
        ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStateToProps)(ExpenseList)