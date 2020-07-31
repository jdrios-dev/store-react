import React from 'react';
import '../assets/styles/components/Carousels.scss';

const Carousels = () => (
  <div className='galery'>
    <h2>your best decision</h2>
    <div className='galery__container'>
      <img className='galery__item-board' src='https://static.gigabyte.com/Product/2/7249/2020043017292972629c53754fd600e173884f0c287d18f6_mm.png' alt='Gpu for sale' />
      <img className='galery__item-board' src='https://static.gigabyte.com/Product/2/7249/2020043017292972629c53754fd600e173884f0c287d18f6_mm.png' alt='Gpu for sale' />
      <img className='galery__item-board' src='https://static.gigabyte.com/Product/2/7249/2020043017292972629c53754fd600e173884f0c287d18f6_mm.png' alt='Gpu for sale' />
    </div>

    <div className='galery__container'>
      <a href='modal.html'><img className='galery__item-gpu' src='https://static.gigabyte.com/Product/3/7017/2019072515314279487ade0b9a0288b1a31e377c7cb3e5db_m.png' alt='Gpu for sale' /></a>
      <img className='galery__item-gpu' src='https://static.gigabyte.com/Product/3/7017/2019072515314279487ade0b9a0288b1a31e377c7cb3e5db_m.png' alt='Gpu for sale' />
      <img className='galery__item-gpu' src='https://static.gigabyte.com/Product/3/7017/2019072515314279487ade0b9a0288b1a31e377c7cb3e5db_m.png' alt='Gpu for sale' />
    </div>

    <div className='galery__container'>
      <img className='galery__item-case' src='https://static.gigabyte.com/Product/9/6103/20161122155042_m.png' alt='Gpu for sale' />
      <img className='galery__item-case' src='https://static.gigabyte.com/Product/9/6103/20161122155042_m.png' alt='Gpu for sale' />
      <img className='galery__item-case' src='https://static.gigabyte.com/Product/9/6103/20161122155042_m.png' alt='Gpu for sale' />
    </div>

    <div className='galery__container'>
      <img className='galery__item-cooler' src='https://static.gigabyte.com/Product/41/6691/2018082219594552_m.png' alt='Gpu for sale' />
      <img className='galery__item-cooler' src='https://static.gigabyte.com/Product/41/6691/2018082219594552_m.png' alt='Gpu for sale' />
      <img className='galery__item-cooler' src='https://static.gigabyte.com/Product/41/6691/2018082219594552_m.png' alt='Gpu for sale' />
    </div>
  </div>
);

export default Carousels;
