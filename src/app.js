import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
console.log('hi');


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
