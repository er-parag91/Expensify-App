import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add a expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">HelpPage</NavLink>
    </header>
)

export default Header;