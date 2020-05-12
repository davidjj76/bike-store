import { connect } from 'react-redux';

import BikesList from './BikesList';

import { getBikes } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    bikes: getBikes(state),
  };
}

export default connect(mapStateToProps)(BikesList);
