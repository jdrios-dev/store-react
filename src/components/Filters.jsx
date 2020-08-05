import React from 'react';
import '../assets/styles/components/Filters.scss';

const Filters = () => (
  <nav className='filter__nav' id='main__filter'>
    <ul>
      <li className='filter__nav--category'>
        <p>CPU</p>
      </li>
      <li id='cpus'>
        <label htmlFor='cpu__intel'>
          Intel
          <input type='checkbox' name='intel' id='cpu__intel' />
        </label>
        <label htmlFor='cpu__amd'>
          AMD
          <input type='checkbox' name='amd' id='cpu__amd' />
        </label>
      </li>
    </ul>

    <ul>
      <li className='filter__nav--category'>
        <p>Boards</p>
      </li>
      <li>
        <label htmlFor='board__asus'>
          ASUS
          <input type='checkbox' name='asus' id='board__asus' />
        </label>
        <label htmlFor='board__msi'>
          MSI
          <input type='checkbox' name='amd' id='board__msi' />
        </label>
        <label htmlFor='board__aorus'>
          Aorus
          <input type='checkbox' name='aorus' id='board__aorus' />
        </label>
      </li>
    </ul>

    <ul>
      <li className='filter__nav--category'>
        <p>GPU</p>
      </li>
      <li>
        <label htmlFor='gpu__nvidia'>
          Nvidia
          <input type='checkbox' name='nvidia' id='gpu__nvidia' />
        </label>
        <label htmlFor='gpu__amd'>
          AMD
          <input type='checkbox' name='amd-gpu' id='checkbox' />
        </label>
      </li>
    </ul>

    <ul>
      <li className='filter__nav--category'>
        <p>Memory</p>
      </li>
      <li>
        <label htmlFor='memory__ddr3'>
          DDR3
          <input type='checkbox' name='ddr3' id='memory__ddr3' />
        </label>
        <label htmlFor='memory__ddr4'>
          DDR4
          <input type='checkbox' name='ddr4' id='memory__ddr4' />
        </label>
      </li>
    </ul>

    <ul>
      <li className='filter__nav--category'>
        <p>Power Supply</p>
      </li>
      <li>
        <label htmlFor='ps__small'>
          450w
          <input type='checkbox' name='450w' id='ps__small' />
        </label>
        <label htmlFor='ps__medium'>
          600w
          <input type='checkbox' name='600w' id='ps__medium' />
        </label>
        <label htmlFor='ps__large'>
          1000w
          <input type='checkbox' name='1000w' id='ps__large' />
        </label>
      </li>
    </ul>
  </nav>
);

export default Filters;

