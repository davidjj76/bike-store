import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import BikesFilters from '../BikesFilters';
import BikesList from '../BikesList';

import './styles.css';

export default function BikesStore({
  className,
  filtersClassName,
  listClassName,
  addToCart,
}) {
  return (
    <div className={classNames('bikes-store', className)}>
      <BikesFilters className={filtersClassName} />
      <BikesList className={listClassName} addToCart={addToCart} />
    </div>
  );
}

BikesStore.propTypes = {
  className: T.string,
  filtersClassName: T.string,
  listClassName: T.string,
};
