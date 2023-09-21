import React from 'react';

import './productItem.scss';

export const ProductItem = (props) => {
  const { title, price, brand, image } = props;
  return (
    <div className="product">
      <img className="product__image" src={image} alt={title} />
      <div className="product__info">
        <h2 className="product__info--title">{title}</h2>
        <h3 className="product__info--price">${price}</h3>
        <p className="product__info--brand">{brand}</p>
        <p className="product__info--description">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit
        </p>
        <p className="product__info--link">View details</p>
      </div>
    </div>
  );
};
