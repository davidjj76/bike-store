import React from 'react';
import classNames from 'classnames';

import FilterButton from '../FilterButton';
import { BIKE_FILTERS } from '../../constants';

import './styles.css';

export default function BikesFilters({ className }) {
  return (
    <div className={classNames('bikes-filters', className)}>
      Bike type:
      <FilterButton className="filter" active filter={BIKE_FILTERS.ALL}>
        All
      </FilterButton>
      <FilterButton className="filter" filter={BIKE_FILTERS.MOUNTAIN}>
        Mountain
      </FilterButton>
      <FilterButton className="filter" filter={BIKE_FILTERS.ROAD}>
        Road
      </FilterButton>
    </div>
  );
}
