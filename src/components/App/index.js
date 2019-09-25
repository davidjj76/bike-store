import { connect } from 'react-redux';

import App from './App';

import BikesService from '../../services/Bikes';
import { setBikes } from '../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      const bikes = BikesService.getAllBikes();
      dispatch(setBikes(bikes));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
