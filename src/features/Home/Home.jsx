import React from 'react';

import { Link } from 'react-router-dom';

import { ProductItem, Sidebar, TopBar } from 'src/components';

import './home.scss';

export const Home = (props) => {
  const {
    isMenuOpen,
    setSelectedBrands,
    setPriceRange,
    priceRange,
    filterProducts,
    filteredProducts,
    handleLowToHigh,
    handleHighToLow,
    activeSortingOption,
  } = props;
  return (
    <div className="home-wrapper">
      <div className="home">
        <p className="home__path">Home {'>'} Electronics</p>
        <TopBar
          handleLowToHigh={handleLowToHigh}
          handleHighToLow={handleHighToLow}
          activeSortingOption={activeSortingOption}
        />
        <div className="home__catalog">
          <Sidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            setSelectedBrands={setSelectedBrands}
            isMenuOpen={isMenuOpen}
            filterProducts={filterProducts}
          />
          <div className="home__products">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductItem
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  brand={product.brand}
                  image={product.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
