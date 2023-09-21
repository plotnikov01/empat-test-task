import React from 'react';
import { Slider, InputNumber } from 'antd';

import './priceRange.scss';

export const PriceRange = (props) => {
  const { setPriceRange, priceRange, filterProducts } = props;
  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleMinInputChange = (value) => {
    const newRange = [...priceRange];
    newRange[0] = value;
    setPriceRange(newRange);
  };

  const handleMaxInputChange = (value) => {
    const newRange = [...priceRange];
    newRange[1] = value;
    setPriceRange(newRange);
  };

  return (
    <div className="pricerange">
      <div className="pricerange__apply">
        <p className="pricerange__apply--range">Price range, $</p>
        <button onClick={filterProducts} className="pricerange__apply--button">
          Apply
        </button>
      </div>

      <Slider range step={10} min={0} max={3000} value={priceRange} onChange={handleSliderChange} />

      <div className="pricerange__inputs">
        <div className="pricerange__inputs--wrapper">
          <div className="pricerange__inputs--label">Min</div>
          <InputNumber
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={handleMinInputChange}
          />
        </div>
        <div className="pricerange__inputs--wrapper">
          <div className="pricerange__inputs--label">Max</div>
          <InputNumber
            min={priceRange[0]}
            max={3000}
            value={priceRange[1]}
            onChange={handleMaxInputChange}
          />
        </div>
      </div>
    </div>
  );
};
