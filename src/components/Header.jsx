import React from 'react';

const Header = () => (
  <header className='header__container'>
    <div className='header__subcontainer'>
      <a className='header__logo logo' href='index.html'>PC Store</a>

      <span className='header__search'>
        <input className='header__input' type='text' name='search' placeholder='Search here' />
        <img className='header__button--lupa' src='https://image.flaticon.com/icons/svg/49/49116.svg' alt='search icon' />
      </span>

      <ul className='header__button'>
        <a className='header__button--fav' href='#favoritos'>
          <img src='imgs/028-favourite.svg' alt='heart' />
        </a>
        <a className='header__button--cart' id='cartOpenButton' href='#favoritos'>
          <img src='imgs/044-shopping cart.svg' alt='cart' />
        </a>
        <a className='header__button--profile' href='log-in.html'>
          <img src='imgs/036-customer.svg' alt='customer profile' />
        </a>
      </ul>
    </div>
  </header>
);

export default Header;
