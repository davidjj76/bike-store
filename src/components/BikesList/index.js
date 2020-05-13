import { connect } from 'react-redux';

import BikesList from './BikesList';

import { addToCart } from '../../store/actions';
import { getVisibleBikes } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    bikes: getVisibleBikes(state, ownProps.filter),
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     addToCart: bikeId => dispatch(addToCart(bikeId)),
//   };
// }

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikesList);
