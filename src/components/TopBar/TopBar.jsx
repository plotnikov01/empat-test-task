import React from 'react';

import { PriceButton } from '../PriceButton/PriceButton';

import { ReactComponent as UploadIcon } from 'src/assets/icons/upload.svg';
import { ReactComponent as DownloadIcon } from 'src/assets/icons/download.svg';

import './topbar.scss';

export const TopBar = (props) => {
  const { handleLowToHigh, handleHighToLow, activeSortingOption } = props;

  const classLowToHigh = activeSortingOption === 'lowToHigh' ? 'pricebutton active' : 'pricebutton';

  const classHighToLow = activeSortingOption === 'highToLow' ? 'pricebutton active' : 'pricebutton';

  return (
    <div className="topbar">
      <PriceButton
        onClick={handleLowToHigh}
        activeSortingOption={activeSortingOption}
        title="Low to High"
        icon={<UploadIcon />}
        className={classLowToHigh}
      />
      <PriceButton
        onClick={handleHighToLow}
        activeSortingOption={activeSortingOption}
        title="High to Low"
        icon={<DownloadIcon />}
        className={classHighToLow}
      />
    </div>
  );
};
