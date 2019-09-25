import { connect } from 'react-redux';

import Header from './Header';

import { getTotalCartItems } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    totalCartItems: getTotalCartItems(state.cart),
  };
}

export default connect(mapStateToProps)(Header);
