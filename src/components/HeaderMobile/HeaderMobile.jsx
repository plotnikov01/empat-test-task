import React from 'react';

import { ReactComponent as BackIcon } from 'src/assets/icons/back.svg';

import './headerMobile.scss';
import { Link } from 'react-router-dom';

export const HeaderMobile = () => {
  return (
    <div className="headermobile">
      <Link to="/">
        <BackIcon />
      </Link>
    </div>
  );
};
