import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='galery'>
    <div className='galery__container'>
      <h2>your best decision</h2>
      {children}

    </div>
  </section>
);

export default Carousel;
