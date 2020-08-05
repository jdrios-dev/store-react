import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <h2 className='notfound__title'>
      Are you sure that you want to be here?
    </h2>
    <div className='notfound__container'>
      <h3>
        you are in a
        <span>
          <a href='/'>
            404
          </a>
        </span>
        error, I mean, you are lost
      </h3>
    </div>
  </>
);

export default NotFound;
