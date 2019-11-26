import { connect } from 'react-redux';
import { getVisibleBikes } from '../../store/selectors';

import BikesList from './BikesList';

function mapStateToProps(state) {
  return {
    bikes: getVisibleBikes(state.bikes, state.filter),
  };
}

export default connect(mapStateToProps)(BikesList);
