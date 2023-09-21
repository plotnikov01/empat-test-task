import React from 'react';

import './priceButton.scss';

export const PriceButton = (props) => {
  const { title, icon, onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <p>Price: {title}</p>
      <span className="pricebutton__icon">{icon}</span>
    </div>
  );
};
