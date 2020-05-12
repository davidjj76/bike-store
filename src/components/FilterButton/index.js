import { connect } from 'react-redux';

import FilterButton from './FilterButton';

import { setFilter } from '../../store/actions';
import { isActiveFilter } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    active: isActiveFilter(state, ownProps.filter),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
