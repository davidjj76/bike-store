import { connect } from 'react-redux';

import BikesList from './BikesList';

import { addToCart } from '../../store/actions';
import { getVisibleBikes } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    bikes: getVisibleBikes(state.bikes, state.bikesFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: itemId => dispatch(addToCart(itemId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BikesList);
