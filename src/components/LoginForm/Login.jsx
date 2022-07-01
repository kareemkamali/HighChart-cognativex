import React, { useEffect, useState } from 'react';


import { images } from '../constants';
import { useFormik } from 'formik';//formik the most library using to easier the form submit 
import { useDispatch, useSelector } from 'react-redux';
import { checkUsers } from '../../redux/LoginSlice';
import { useHistory } from 'react-router-dom';

import './Login.scss'


const Login = () => {
  
  
  let history = useHistory();//use history function like redirect in react router dom
  const dispatch = useDispatch();//dispatch function from redux to dispatch action to slice
 
  const { isValid } = useSelector(state => state.isValid);// to get the state from STORE
  const [login, setIsLogin] = useState(false)

//validate to check if the value are correct...for example if i have email should containe @ .
 const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'User Name Required';
  }
  if (!values.password) {
    errors.password = 'User Name Required';
  }
  return errors;
};

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      dispatch(checkUsers(values));
      setIsLogin(true);

    },
  });


  
  //useEffect react hook run only when the state of isValid change
  useEffect(() => {
    if (isValid)
      return history.push('/dashboard')//go to dashbord page

  }, [isValid])

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__container-header">
          <div className="form__container-backdrop">
          </div>
          <div className="form__container-title">
            <h1>Form Login</h1>
            <h2>Welcome Back!</h2>
            <h3>please Sign in to continue!</h3>
            <p>username:admin <br />password:admin12345</p>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="form__container-inputs">
          <input
            id='username'
            name='username'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder='please Enter Username!'

          />
          {/* if missed @ in email form example or whatever in this case the username should required so this
                  error will show */}
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
          <input
            id='password'
            name='password'
            type='password'
            placeholder='please Enter your password!'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type='submit' disabled={!(formik.isValid && formik.dirty)}>Sign In</button>
          <img src={images.logo} alt='logo' />
          {/* //to check if username or password are correct */}
          {!isValid && login && 'Please Enter a Valid Username and password'}
        </form>
      </div>

    </div>

  )
}

export default Login