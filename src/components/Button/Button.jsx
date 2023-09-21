import React from 'react';

import './button.scss';

export const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button onClick={onClick} className="button">
      {title}
    </button>
  );
};
