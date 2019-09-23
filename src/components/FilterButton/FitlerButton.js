import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default function FilterButton({ active, className, children, onClick }) {
  return (
    <button
      className={classNames('filter-button', className, { active })}
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

FilterButton.propTypes = {
  active: T.bool,
  className: T.string,
  children: T.node.isRequired,
  onClick: T.func.isRequired,
};

FilterButton.defaultProps = {
  active: false,
};
