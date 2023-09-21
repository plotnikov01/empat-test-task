import React from 'react';

import { ReactComponent as CartIcon } from 'src/assets/icons/cart.svg';

import './buttonProduct.scss';

export const ButtonProduct = () => {
  return (
    <button className="buttonproduct">
      <CartIcon />
      <p>Buy</p>
    </button>
  );
};
