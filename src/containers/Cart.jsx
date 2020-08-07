/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Cart.scss';

const Cart = (props) => {
  const { priceUs, priceCop, model, image } = props;
  return (
    <div>
      <div className='cart__container' id='cart'>
        <ul className='cart__header'>
          <h2 className='cart__title'>My Cart</h2>
          <span className='cart__close' id='closeCart'>x</span>
        </ul>
        <ul className='cart__list'>
          <li className='cart__item'>
            <img className='cart__item--img' src={image} alt='' />
            <ul className='cart__item--detail'>
              <h3>{model}</h3>
              <p>Quantity: 1</p>
            </ul>
            <p className='cart__item--detail'>{priceUs}</p>
          </li>
          <ul className='cart__price'>
            <p className='cart__price--label'>Total</p>
            <p className='cart__price--number'>$150.00</p>
          </ul>
          <form className='button__pay--form' action=''>
            <button className='button__pay' type='submit'>Pay</button>
          </form>
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(Cart);
