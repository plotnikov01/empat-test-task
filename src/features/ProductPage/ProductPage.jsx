import React from 'react';
import { useParams } from 'react-router';
import { ButtonProduct, HeaderMobile } from 'src/components';

import { productsData } from 'src/constants/productsData';

import './productPage.scss';

export const ProductPage = () => {
  const { id } = useParams();

  const idAsNumber = parseInt(id, 10);

  const product = productsData.find((product) => product.id === idAsNumber);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <HeaderMobile />
      <div className="productpage">
        <h3 className="productpage__path">Home {'>'} Electronics</h3>
        <div className="productpage__container">
          <img className="productpage__image" src={product.image} alt={product.title} />
          <div className="productpage__info">
            <h1 className="productpage__info--title">{product.title}</h1>
            <h2 className="productpage__info--price">${product.price}</h2>
            <div className="productpage__button">
              <ButtonProduct />
            </div>
            <div className="productpage__info--category">
              <div className="productpage__info--category-line">
                <span>Category:</span>
                <p>Electronics</p>
              </div>
              <div className="line"></div>
              <div className="productpage__info--category-line">
                <span>Type:</span>
                <p>Smart watch</p>
              </div>
              <div className="productpage__info--category-line">
                <span>Material:</span>
                <p>Aluminium</p>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="productpage__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
          </p>
        </div>
      </div>
    </>
  );
};
