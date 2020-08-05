import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <span className='footer__span-logo'>
      <Link to='/'>
        <p className='header__log'>PC Store</p>
      </Link>
    </span>

    <span className='footer__span-link'>
      <Link to='/login'>
        <p className='footer__account'>My Account</p>
      </Link>
      <Link to='/politics'>
        <p className='footer__account'>Politics</p>
      </Link>
    </span>
  </footer>
);

export default Footer;
