import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <span className='footer__span-logo'>
      <a className='header__log' href='index.html'>PC Store</a>
    </span>

    <span className='footer__span-link'>
      <a className='footer__account' href='#mi_profile'>My Account</a>
      <a href='footer__politics'>Politics</a>
    </span>
  </footer>
);

export default Footer;
