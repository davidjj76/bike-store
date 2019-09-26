import { connect } from 'react-redux';

import App from './App';

import { fetchBikes } from '../../store/actions';

function mapStateToProps(state) {
  return {
    ...state.ui,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(fetchBikes()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
