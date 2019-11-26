import { connect } from 'react-redux';

import App from './App';
import { setBikes } from '../../store/actions';

// function mapDispatchToProps(dispatch) {
//   return {
//     loadBikes: bikes => dispatch(setBikes(bikes)),
//   };
// }

const mapDispatchToProps = {
  loadBikes: setBikes,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
