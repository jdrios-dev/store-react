import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Categories = ({ children }) => (
  <div className='categories__container'>
    <h3 className='categories__title'>title</h3>
    {children}
  </div>
);

export default Categories;
