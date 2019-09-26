import { connect } from 'react-redux';

import App from './App';

import BikesService from '../../services/Bikes';
import {
  fetchBikesRequest,
  fetchBikesFailure,
  fetchBikesSuccess,
} from '../../store/actions';

function mapStateToProps(state) {
  return {
    ...state.ui,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(fetchBikesRequest());
      return BikesService.getAllBikes()
        .then(bikes => dispatch(fetchBikesSuccess(bikes)))
        .catch(error => dispatch(fetchBikesFailure(error)));
      // dispatch(setBikes(bikes));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
