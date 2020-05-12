import { connect } from 'react-redux';

import Cart from './Cart';

import { getCartItems } from '../../store/selectors';
import { checkoutCart } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    items: getCartItems(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    checkoutCart: () => {
      dispatch(checkoutCart());
      ownProps.history.push('/');
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
