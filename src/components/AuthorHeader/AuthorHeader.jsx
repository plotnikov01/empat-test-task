import React from 'react';

import { ReactComponent as BrandIcon } from 'src/assets/icons/brand.svg';

import './authorHeader.scss';

export const AuthorHeader = () => {
  return (
    <div className="author">
      <BrandIcon />
      <p>
        <span>Frontend task |</span> Плотніков Олександр
      </p>
    </div>
  );
};
