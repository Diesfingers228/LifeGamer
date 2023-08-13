import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import '../AppMobile.css';
import { useDispatch, useSelector } from 'react-redux';
import { headerStyle, windowClick} from '../Store/Slices/FirstSlice';
import Right from '../Icons_and_photos/Right.svg';

function Header() {
let navigate = useNavigate();

// Store
const selector = useSelector(state => state.FirstReducer.bar);
const selectorImg = useSelector(state => state.FirstReducer.rotate);
const dispatch = useDispatch();

  return (
    <>
    <header style={selector}  className='header'>
       <label onClick={() => {navigate(0)}} style={{fontSize: '150%'}}>&raquo;<Link to='/'>Главная</Link></label>
       <label style={{fontSize: '150%'}}>&raquo;<Link to='/info'>Информация</Link></label>
    </header>

    <img style={selectorImg} src={Right} className='menu-img' onClick={() => {dispatch(headerStyle());}}/>
   </>
  )
}

export default Header