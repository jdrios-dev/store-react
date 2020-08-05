import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <>
    <h2 className='register__title'>
      sign up
    </h2>
    <div className='register__container'>
      <form className='register__container--form' action=''>
        <label className='register__user--label label' htmlFor='register__user'>
          <p>
            User name
          </p>
          <input className='login__user input' type='text' name='register__user' id='register__name' />
        </label>
        <label className='register__user--label label' htmlFor='register__email'>
          <p>
            E-mail
          </p>
          <input className='login__user input' type='text' name='email' id='register__email' />
        </label>
        <label className='register__pass label' htmlFor='register__pass'>
          <p>
            Password
          </p>
          <input className='register__pass input' type='password' name='pass' id='register__pass' />
        </label>
        <label className='register__pass label' htmlFor='register__repass'>
          <p>
            Repeat Password
          </p>
          <input className='register__pass input' type='password' name='repass' id='register__repass' />
        </label>
        <button className='register__button' type='submit'>
          Sign up
        </button>
        <p className='register__register--link'>
          I have an account,
          <a href='/login'>
            Log in
          </a>
        </p>
      </form>
    </div>
  </>
);

export default Register;
