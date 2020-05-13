import { connect } from 'react-redux';

import App from './App';
import { fetchBikes } from '../../store/actions';
import { getUi } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return getUi(state);
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     loadBikes: () => dispatch(fetchBikes()),
//   };
// }

const mapDispatchToProps = {
  loadBikes: fetchBikes,
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;
