import { connect } from 'react-redux';

import App from './App';
import {
  fetchBikesSuccess,
  fetchBikesRequest,
  fetchBikesFailure,
} from '../../store/actions';
import { getUi } from '../../store/selectors';

import BikesService from '../../services/Bikes';

function mapStateToProps(state, ownProps) {
  return getUi(state);
}

function mapDispatchToProps(dispatch, ownProps) {
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
//   loadBikes: fetchBikesSuccess,
// };

const connected = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;
