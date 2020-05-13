import { connect } from 'react-redux';

import Cart from './Cart';

import { getCartItems } from '../../store/selectors';
import { checkoutCartAndNavigate, removeFromCart } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    items: getCartItems(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    checkoutCart: () => dispatch(checkoutCartAndNavigate()),
    removeFromCart: (itemId, quantity) =>
      dispatch(removeFromCart(itemId, quantity)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
