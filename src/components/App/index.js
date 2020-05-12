import { connect } from 'react-redux';

import App from './App';
import { setBikes } from '../../store/actions';

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     loadBikes: bikes => dispatch(setBikes(bikes)),
//   };
// }

const mapDispatchToProps = {
  loadBikes: setBikes,
};

const connected = connect(null, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;
