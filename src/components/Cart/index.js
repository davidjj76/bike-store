import { connect } from 'react-redux';

import Cart from './Cart';
import { getCartItems } from '../../store/selectors';
import { removeFromCart, checkoutCart } from '../../store/actions';

function mapStateToProps(state) {
  return {
    items: getCartItems(state.cart, state.bikes),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     removeFromCart: (itemId, quantity) =>
//       dispatch(removeFromCart(itemId, quantity)),
//     checkoutCart: () => dispatch(checkoutCart()),
//   };
// }

const mapDispatchToProps = {
  removeFromCart,
  checkoutCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
