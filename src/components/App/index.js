import { connect } from 'react-redux';

import App from './App';
import { fetchBikes } from '../../store/actions';

// function mapDispatchToProps(dispatch) {
//   return {
//     loadBikes: () => dispatch(fetchBikes()),
//   };
// }

const mapDispatchToProps = {
  loadBikes: fetchBikes,
};

function mapStateToProps(state) {
  return state.ui;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
