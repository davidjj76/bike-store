import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import FilterButton from '../FilterButton';
import { BIKE_FILTERS } from '../../constants';

import './styles.css';

export default function BikesFilters({
  className,
  bikesFilter,
  setBikesFilter,
}) {
  return (
    <div className={classNames('bikes-filters', className)}>
      Bike type:
      <FilterButton
        className="filter"
        active={bikesFilter === BIKE_FILTERS.ALL}
        filter={BIKE_FILTERS.ALL}
        onClick={() => setBikesFilter(BIKE_FILTERS.ALL)}
      >
        All
      </FilterButton>
      <FilterButton
        className="filter"
        active={bikesFilter === BIKE_FILTERS.MOUNTAIN}
        filter={BIKE_FILTERS.MOUNTAIN}
        onClick={() => setBikesFilter(BIKE_FILTERS.MOUNTAIN)}
      >
        Mountain
      </FilterButton>
      <FilterButton
        className="filter"
        active={bikesFilter === BIKE_FILTERS.ROAD}
        filter={BIKE_FILTERS.ROAD}
        onClick={() => setBikesFilter(BIKE_FILTERS.ROAD)}
      >
        Road
      </FilterButton>
    </div>
  );
}

BikesFilters.propTypes = {
  className: T.string,
  bikesFilter: T.oneOf(Object.values(BIKE_FILTERS)),
  setBikesFilter: T.func.isRequired,
};
