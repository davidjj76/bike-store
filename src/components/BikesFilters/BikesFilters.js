import React from 'react';
import classNames from 'classnames';

import './styles.css';

export default function BikesFilters({ className }) {
  return <div className={classNames('filters', className)}>Filters</div>;
}
