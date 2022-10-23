import React from 'react';

import './Header.scss';
import { images } from '../../constants';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__logo'>TODO</h1>
      <button className='header__theme-btn'>
        <img src={images.iconSun} alt='' />
      </button>
    </div>
  );
};

export default Header;
