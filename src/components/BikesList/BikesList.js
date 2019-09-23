import React from 'react';
import classNames from 'classnames';

import './styles.css';

function BikeCard({ name, image, price, stock }) {
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
          {stock ? (
            <button className="buy">add to cart</button>
          ) : (
            <span className="no-stock">out of stock!</span>
          )}
        </div>
      </footer>
    </div>
  );
}

export default function BikesList({ className, bikes }) {
  return (
    <div className={classNames('bikes-list', className)}>
      Bikes List
      <ul className="list">
        {bikes.map(bike => (
          <li className="list-item" key={bike.id}>
            <BikeCard {...bike} />
          </li>
        ))}
      </ul>
    </div>
  );
}
