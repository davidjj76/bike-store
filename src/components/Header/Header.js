import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import classNames from 'classnames';

const validFilters = ['/mountain', '/road'];

export default function Header({ className, cartItems }) {
  return (
    <header className={classNames('header', className)}>
      <h1 className="title">BIKES - STORE</h1>
      <div className="navbar">
        <NavLink
          className="navlink"
          isActive={({ isExact }, { pathname }) =>
            isExact || validFilters.includes(pathname)
          }
          to="/"
        >
          Store
        </NavLink>
        <NavLink className="navlink" exact to="/cart">
          {`Checkout (${cartItems})`}
        </NavLink>
      </div>
    </header>
  );
}
