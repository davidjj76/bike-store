import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import classNames from 'classnames';

export default function Header({ className }) {
  return (
    <header className={classNames('header', className)}>
      <NavLink
        className="navlink"
        isActive={({ isExact }, { pathname }) =>
          isExact || ['/mountain', '/road'].includes(pathname)
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink className="navlink" exact to="/cart">
        Cart
      </NavLink>
    </header>
  );
}
