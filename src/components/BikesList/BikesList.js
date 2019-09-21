import React from 'react';
import classNames from 'classnames';

export default function BikesList({ className }) {
  return (
    <div className={classNames('bikes-list', className)}>
      Bikes List
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
