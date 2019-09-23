import React from 'react';
import classNames from 'classnames';

import './styles.css';

export default function FilterButton({
  active,
  className,
  children,
  onClick = () => {},
}) {
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
