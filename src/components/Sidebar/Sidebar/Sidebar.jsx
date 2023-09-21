import React from 'react';

import { PriceRange, Button, BrandList } from 'src/components';

import './sidebar.scss';

export const Sidebar = (props) => {
  const { isMenuOpen, setSelectedBrands, setPriceRange, priceRange, filterProducts } = props;
  return (
    <div className={isMenuOpen ? 'sidebar' : 'hidden'}>
      <BrandList setSelectedBrands={setSelectedBrands} />
      <PriceRange
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        filterProducts={filterProducts}
      />
      <div className="sidebar__button">
        <Button onClick={filterProducts} title="Apply" />
      </div>
      <p className="sidebar__reset">Reset filter</p>
    </div>
  );
};
