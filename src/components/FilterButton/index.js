import { connect } from 'react-redux';

import FilterButton from './FilterButton';

import { setFilter } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    active: state.filter === ownProps.filter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton);
