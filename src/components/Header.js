import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink exact to='/' activeClassName='is-active'>
        <h1>Dashboard</h1>
      </NavLink>
      <NavLink to='/create'>
        <h1>Add Expense</h1>
      </NavLink>
      <NavLink to='/contact'>
        <h1>Contact</h1>
      </NavLink>
    </div>
  );
};

export default Header;
