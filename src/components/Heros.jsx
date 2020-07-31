import React from 'react';
import '../assets/styles/components/Heros.scss';

import coverPc1 from '../assets/static/imgs/pcs/pc1.png';

const Heros = () => (
  <div className='hero__container'>
    <img className='hero__img pc1' src={coverPc1} alt='' />
    <img className='hero__img pc2' src='' alt='Pc Ganer Medium' />
    <img className='hero__img pc3' src='' alt='Pc Gamer Pro' />
  </div>
);

export default Heros;
