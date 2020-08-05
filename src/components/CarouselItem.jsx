import React from 'react';
import '../assets/styles/components/Carousel.scss';

const CarouselItem = ({ priceUs, priceCop, model, image, description }) => (

  <div className='galery__item'>
    <img className='galery__item--photo' src={image} alt={model} />
    <span className='galery__item--title'>
      <h3>{model}</h3>
    </span>
    <p className='galery__item--description'>{description}</p>
    <p className='galery__item--price'>{`$ ${priceUs}`}</p>
    <div className='galery__item--details'>
      <img src='../src/assets/static/imgs/cartLogo.svg' alt='Add to favorites items' />
      <img src='../src/assets/static/imgs/favLogo.svg' alt='Add to favorites cart' />
    </div>
  </div>
);

export default CarouselItem;
