import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { BIKE_FILTERS } from '../../constants';

import './styles.css';

export default function FilterButton({ filter, className, children }) {
  return (
    <NavLink
      exact
      className={classNames('button', 'filter-button', className)}
      to={filter === BIKE_FILTERS.ALL ? '/' : `/${filter}`}
    >
      {children}
    </NavLink>
  );
}

FilterButton.propTypes = {
  className: T.string,
  children: T.node.isRequired,
  filter: T.string,
};
