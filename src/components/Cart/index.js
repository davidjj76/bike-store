import { connect } from 'react-redux';

import Cart from './Cart';
import { getCartItems } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    items: getCartItems(state.cart, state.bikes),
  };
}

export default connect(mapStateToProps)(Cart);
