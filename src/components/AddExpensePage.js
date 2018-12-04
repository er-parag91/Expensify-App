import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux'
import { addExpense } from './../actions/expenses';

export class AddExpensePage extends Component {

    onSubmit = (expense) => {
        this.props.history.push('/')
        this.props.addExpense(expense)

    }
    render() {
        return (
            <div>
                <h1>Add expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})


export default connect(null, mapDispatchToProps)(AddExpensePage);