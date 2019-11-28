import { connect } from 'react-redux';

import App from './App';
import BikesService from '../../services/Bikes';
import {
  fetchBikesRequest,
  fetchBikesSuccess,
  fetchBikesFailure,
} from '../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    loadBikes: async () => {
      dispatch(fetchBikesRequest());
      try {
        const bikes = await BikesService.getAllBikes();
        dispatch(fetchBikesSuccess(bikes));
      } catch (error) {
        dispatch(fetchBikesFailure(error));
      }
    },
  };
}

// const mapDispatchToProps = {
//   loadBikes: setBikes,
// };

function mapStateToProps(state) {
  return state.ui;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
