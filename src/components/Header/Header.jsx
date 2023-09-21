import React from 'react';
import { useLocation } from 'react-router';

import { PriceButton } from 'src/components';

import { ReactComponent as BackIcon } from 'src/assets/icons/back.svg';
import { ReactComponent as UploadIcon } from 'src/assets/icons/upload.svg';
import { ReactComponent as DownloadIcon } from 'src/assets/icons/download.svg';
import { ReactComponent as CrossIcon } from 'src/assets/icons/cross.svg';
import { ReactComponent as FilterIcon } from 'src/assets/icons/filter.svg';

import './header.scss';

export const Header = (props) => {
  const { isMenuOpen, toggleMenu, handleLowToHigh, handleHighToLow, activeSortingOption } = props;

  const location = useLocation();

  const shouldHideElement = location.pathname.includes('/products/');

  const classLowToHigh = activeSortingOption === 'lowToHigh' ? 'pricebutton active' : 'pricebutton';
  const classHighToLow = activeSortingOption === 'highToLow' ? 'pricebutton active' : 'pricebutton';

  return (
    <>
      {shouldHideElement ? (
        ''
      ) : (
        <header className="header">
          <div className="header__path">
            <BackIcon />
            <h1>Electronics</h1>
          </div>
          <div className="header__menu">
            <PriceButton
              onClick={handleLowToHigh}
              activeSortingOption={activeSortingOption}
              title="Low to High"
              className={classLowToHigh}
              icon={<UploadIcon style={{ width: 18, height: 18, marginTop: 5 }} />}
            />
            <PriceButton
              onClick={handleHighToLow}
              activeSortingOption={activeSortingOption}
              title="High to Low"
              className={classHighToLow}
              icon={<DownloadIcon style={{ width: 18, height: 18, marginTop: 5 }} />}
            />
            <button onClick={toggleMenu} className="topbar__button">
              {isMenuOpen ? <CrossIcon /> : <FilterIcon />}
            </button>
          </div>
        </header>
      )}
    </>
  );
};
