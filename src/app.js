import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water Bill', amount: 1500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
