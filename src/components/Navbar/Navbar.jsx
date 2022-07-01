import React from 'react'


import { useSelector, useDispatch } from 'react-redux';
import { images } from '../constants'; // call image directly from index file
import { logOut } from '../../redux/LoginSlice';


import './Navbar.scss';


const Navbar = () => {

  const dispatch = useDispatch();

// to get the state from STORE
  const { username } = useSelector(state => state.username);

  const logOutHandler = () => {
    dispatch(logOut());
  }

  
  return (

    <div className="navbar">
      <div className="navbar__container app__flex">
        <img src={images.logo} alt='cognativex' />
        {username ? <h1>Hello,{username}</h1> : null}
        {username ? <button onClick={logOutHandler} >LogOut</button> : null}
      </div>

    </div>
  )
}

export default Navbar