import { connect } from 'react-redux';

import Cart from './Cart';

import { removeFromCart, checkoutCart } from '../../store/actions';
import { getCartItems } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    items: getCartItems(state.cart, state.bikes),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (itemId, quantity) =>
      dispatch(removeFromCart(itemId, quantity)),
    checkoutCart: () => dispatch(checkoutCart()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
