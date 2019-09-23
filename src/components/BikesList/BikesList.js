import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './styles.css';

function BikeCard({ name, image, price, hasStock, onAddToCartClick }) {
  return (
    <div className="bike-card">
      <div className="picture">
        <picture>
          <img alt={name} src={`/images/${image}`} />
        </picture>
      </div>
      <footer className="footer">
        <div className="info">
          <span className="name">{name}</span>
          <span className="price">{`${price.toLocaleString()} €`}</span>
        </div>
        <div className="actions">
          {hasStock ? (
            <button className="buy" onClick={onAddToCartClick}>
              add to cart
            </button>
          ) : (
            <span className="no-stock">out of stock!</span>
          )}
        </div>
      </footer>
    </div>
  );
}

BikeCard.propTypes = {
  name: T.string.isRequired,
  image: T.string.isRequired,
  price: T.number.isRequired,
  hasStock: T.bool,
  onAddToCartClick: T.func.isRequired,
};

BikeCard.defaultProps = {
  stock: false,
};

export default function BikesList({ className, bikes, addToCart }) {
  return (
    <div className={classNames('bikes-list', className)}>
      Bikes List
      <ul className="list">
        {bikes.map(bike => (
          <li className="list-item" key={bike.id}>
            <BikeCard {...bike} onAddToCartClick={() => addToCart(bike.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

BikesList.propTypes = {
  className: T.string,
  bikes: T.arrayOf(T.shape({ id: T.string.isRequired })),
  addToCart: T.func.isRequired,
};
