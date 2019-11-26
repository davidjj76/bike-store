import { connect } from 'react-redux';

import BikesList from './BikesList';

function mapStateToProps(state) {
  return {
    bikes: state.bikes,
  };
}

export default connect(mapStateToProps)(BikesList);
