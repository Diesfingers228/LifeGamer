import React from 'react';
import { useDispatch } from 'react-redux';
import hi from '../Icons_and_photos/generalHi.jpg';
import { animationElements, windowClick, animationScroolFooter } from '../Store/Slices/FirstSlice';
import Footer from './SecondaryComponents/Footer.jsx';

function Main() {

  let dispatch = useDispatch();

  //Animation
  if (window.screen.width >= '1023') {
    dispatch(animationElements());
    dispatch(animationScroolFooter());
  }
    

  return (
  <>
  <div className='general-div'  onClick={() => {dispatch(windowClick(''))}}>
  <main id="frame">
  <section className='container-h2'><h2 className='main-h2'>Добро пожаловать на сайт сообщества<h2 className='main-h2-name'>Life Gamer!</h2></h2></section>
        <input type="radio" name="frame" id="frame1" defaultChecked/>
        <input type="radio" name="frame" id="frame2" />
        <input type="radio" name="frame" id="frame3" />
        <input type="radio" name="frame" id="frame4" />
        <div id="slides">
            <div id="overflow">
                <div className="inner">
                    <div className="frame frame_1">
                        <div className="frame-content">
                            <h2>Мы всегда рады новым подписчикам.</h2>
                        </div>
                    </div>
                    <div className="frame frame_2">
                        <div className="frame-content">
                            <h2>Подписываясь, вы помогаете нам развиваться.</h2>
                        </div>
                    </div>
                    <div className="frame frame_3">
                        <div className="frame-content">
                            <h2>Мы надеемся, что вам понравится наш контент.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="controls">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
            <label for="frame4"></label>
        </div>
        <div id="bullets">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
        </div>
        <section className='main-sentence'>
            <p>Благодаря вашим лайкам и комментариям автор старается стать лучше.</p>
            <p style={{marginRight: '3%'}}>Чем активнее сообщество, тем счастливее автор.</p>
            <p style={{marginRight: '6%'}}>Счастье...</p>
        </section>

        <section className='main-hi'>
            <img className='main-hi-img' src={hi} alt="nya" />
            <p className='main-hi-p'>С нетерпением ждём в нашем уютном <a href='https://vk.com/ligemer?trackcode=062ed49b2N9dQUma2C5bSIIeR-WFJM7eEUXrNoYSclXIsf_ef71svu3uxZC0V0xAmRF0644X_MQhS-kuhQ5oVdm7oKoe' className='main-hi-p-a'>доме</a>.</p>
        </section>
    </main>
     <Footer />
    </div>
  </>
  )
}

export default Main