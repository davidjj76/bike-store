import { connect } from 'react-redux';

import BikesList from './BikesList';

import { getVisibleBikes } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    bikes: getVisibleBikes(state),
  };
}

export default connect(mapStateToProps)(BikesList);
