import React from 'react'
import footer from '../../Icons_and_photos/footer.jpg'
import { animationScroolFooter } from '../../Store/Slices/FirstSlice'
import { useDispatch } from 'react-redux'

function Footer() {

  let dispatch = useDispatch()

  //Animation
  if (window.screen.width >= '1023') {
    dispatch(animationScroolFooter())
  }

  return (
    <>
    <footer className='footer'>
        <div className='footer-content'>
            <img className='footer-img' src={footer} alt="" />
            <div className='footer-div-container-p'>
                <p>Ссылка на сообщество: <a href='https://vk.com/ligemer?trackcode=062ed49b2N9dQUma2C5bSIIeR-WFJM7eEUXrNoYSclXIsf_ef71svu3uxZC0V0xAmRF0644X_MQhS-kuhQ5oVdm7oKoe' className='footer-a'>Life Gamer.</a></p>
                <p>VK сайтодела: <a href='https://vk.com/bigpipitor228' className='footer-a'>Mister Bombastic.</a></p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer