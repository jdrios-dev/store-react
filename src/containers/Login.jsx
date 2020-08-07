import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/index';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    user: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <h2 className='login__title'>
        Log In
      </h2>
      <div className='login__container'>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <label className='login__user--label label' htmlFor='login__user'>
            <p>
              User name
            </p>
            <input
              className='login__user input'
              type='text'
              name='user'
              id='login__user'
              onChange={handleInput}
            />
          </label>
          <label className='login__pass label' htmlFor='login__pass'>
            <p>
              Password
            </p>
            <input
              className='login__pass input'
              type='password'
              name='password'
              id='login__pass'
              onChange={handleInput}
            />
          </label>
          <button
            className='login__button'
            type='submit'
          >
            Log in
          </button>
          <p className='login__register--link'>
            I do not have an account,
            <Link to='/register'>
              Sign Up
            </Link>
          </p>
          <p className='login__register--forgot'>
            I forgot my password,
            <a href='#forgot'>
              Help me`
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
