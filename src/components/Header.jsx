import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNumbers } from '../actions/getAction';
import favLogo from '../assets/static/imgs/favLogo.svg';
import cartLogo from '../assets/static/imgs/cartLogo.svg';
import profileLogo from '../assets/static/imgs/profileLogo.svg';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <div>
      <header className='header__container'>
        <div className='header__subcontainer'>
          <Link to='/' className='header__logo logo'>
            PC Store
          </Link>
          <span className='header__search'>
            <input className='header__input' type='text' name='search' placeholder='Search here' />
            <img className='header__button--lupa' src='https://image.flaticon.com/icons/svg/49/49116.svg' alt='search icon' />
          </span>
          <ul className='header__button'>
            <Link to='/favoritos'>
              <img src={favLogo} className='header__button--fav' alt='favourite items' />
            </Link>
            <Link to='/cart'>
              <img src={cartLogo} id='cartOpenButton' className='header__button--cart' alt='items in my cart' />
            </Link>
            <Link to='/login'>
              <img src={profileLogo} alt='email input' />
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Header);
