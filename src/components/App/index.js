import { connect } from 'react-redux';

import App from './App';
import { setBikes } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    bikes: state.bikes,
    bikesFilter: state.filter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadBikes: bikes => dispatch(setBikes(bikes)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;
