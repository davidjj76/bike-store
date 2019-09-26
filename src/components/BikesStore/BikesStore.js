import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import BikesFilters from '../BikesFilters';
import BikesList from '../BikesList';
import { BIKE_FILTERS } from '../../constants';

import './styles.css';

export default function BikesStore({
  className,
  filtersClassName,
  listClassName,
  match: { params },
}) {
  return (
    <div className={classNames('bikes-store', className)}>
      <BikesFilters className={filtersClassName} />
      <BikesList
        className={listClassName}
        bikesFilter={params.filter || BIKE_FILTERS.ALL}
      />
    </div>
  );
}

BikesStore.propTypes = {
  className: T.string,
  filtersClassName: T.string,
  listClassName: T.string,
};
