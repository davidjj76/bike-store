import { connect } from 'react-redux';

import FilterButton from './FilterButton';

import { setBikesFilter } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    active: state.bikesFilter === ownProps.filter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setBikesFilter(ownProps.filter)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton);
