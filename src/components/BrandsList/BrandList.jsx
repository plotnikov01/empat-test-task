import React, { useState } from 'react';
import { Checkbox } from 'antd';

import { brandsData } from 'src/constants/brandsData';

import './brandList.scss';

export const BrandList = (props) => {
  const { setSelectedBrands } = props;
  const handleBrandChange = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((item) => item !== brand)
        : [...prevSelectedBrands, brand],
    );
  };

  return (
    <div className="brandlist">
      <h2>Brands</h2>
      <ul>
        {brandsData.map((brand) => (
          <li key={brand.id}>
            <Checkbox onChange={() => handleBrandChange(brand.title)}>
              <p>{brand.title}</p>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
};
