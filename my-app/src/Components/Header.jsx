import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../AppMobile.css';
import { useDispatch, useSelector } from 'react-redux';
import { headerStyle } from '../Store/Slices/FirstSlice';
import Right from '../Icons_and_photos/Right.svg';
import Rei from '../Icons_and_photos/Rei.jpg';

function Header() {

// Store
const selector = useSelector(state => state.FirstReducer.bar);
const selectorImg = useSelector(state => state.FirstReducer.rotate);
const dispatch = useDispatch();

  return (
    <>
    <header style={selector}  className='header'>
       <label className='header-label'>&raquo;<Link to='/'>Главная</Link></label>
       <label className='header-label'>&raquo;<Link to='/info'>Информация</Link></label>
    </header>

    <img style={selectorImg} src={Right} className='menu-img' onClick={() => {dispatch(headerStyle());}}/>

    <img className='rei-spin' src={Rei}/>
   </>
  )
}

export default Header