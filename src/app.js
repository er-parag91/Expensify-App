import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route } from 'react-router-dom';


const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my AddExpensePage component
    </div>
)


const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={ExpenseDashboardPage}></Route>
            <Route path="/create" component={AddExpensePage}></Route>
        </div>
    </BrowserRouter>)

ReactDOM.render(routes, document.getElementById('app'));
