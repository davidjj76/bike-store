import { connect } from 'react-redux';
import { getVisibleBikes } from '../../store/selectors';
import { addToCart } from '../../store/actions';

import BikesList from './BikesList';

function mapStateToProps(state, ownProps) {
  return {
    bikes: getVisibleBikes(state.bikes, ownProps.filter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: bikeId => dispatch(addToCart(bikeId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BikesList);
