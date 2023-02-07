import React from 'react';
import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <>
      <header>
        <img src={logo} className='logo' alt="Logo" />
      </header>
    </>
  );
}

export default Header;
