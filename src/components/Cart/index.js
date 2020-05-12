import { connect } from 'react-redux';

import Cart from './Cart';

import { getCartItems } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    items: getCartItems(state),
  };
}

export default connect(mapStateToProps)(Cart);
