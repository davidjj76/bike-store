import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import List from '../List';

import './styles.css';

function CartItem({
  name,
  image,
  totalPrice,
  quantity,
  onRemoveFromCartClick,
}) {
  return (
    <div className="cart-item">
      <div className="picture">
        <picture>
          <img alt={name} src={`/images/${image}`} />
        </picture>
      </div>
      <span className="name">{name}</span>
      <span className="quantity number">{`${quantity}`}</span>
      <span className="price number">{`${totalPrice.toLocaleString()} €`}</span>
      <button
        className="remove"
        onClick={() => onRemoveFromCartClick(quantity)}
      >
        remove from cart
      </button>
    </div>
  );
}

CartItem.propTypes = {
  name: T.string.isRequired,
  image: T.string.isRequired,
  totalPrice: T.number.isRequired,
  quantity: T.number.isRequired,
  onRemoveFromCartClick: T.func.isRequired,
};

export default function Cart({
  className,
  items,
  removeFromCart,
  checkoutCart,
}) {
  return (
    <div className={classNames('cart', className)}>
      Checkout cart
      {items.length ? (
        <List
          className="list"
          items={items}
          renderItem={item => (
            <CartItem
              {...item}
              onRemoveFromCartClick={quantity =>
                removeFromCart(item.id, quantity)
              }
            />
          )}
        />
      ) : (
        <div>No items</div>
      )}
    </div>
  );
}

Cart.propTypes = {
  className: T.string,
  items: T.arrayOf(T.shape({ id: T.string.isRequired })),
  removeFromCart: T.func.isRequired,
  checkoutCart: T.func.isRequired,
};
