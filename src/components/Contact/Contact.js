import React from 'react'
import classes from './Contact.module.css'
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  var d = new Date()
  const currentYear = d.getFullYear()

  return (
    <footer className={classes.Contact} id="contact">
      <div className={classes.Title}>
        Dónde
      </div>
      <div className={classes.Social}>
        <SocialIcon url="https://twitter.com/miguechiri" target="_blank"/>
        <SocialIcon url="https://facebook.com/migue.chirinos" target="_blank"/>
        <SocialIcon url="https://instagram.com/migue.chirinos/" target="_blank"/>
        <SocialIcon url="https://soundcloud.com/migue-chirinos" target="_blank" />
        <SocialIcon url="https://youtube.com/channel/UC70ZyKpWqdFiGwiJrBiB1SA" target="_blank" />
      </div>
      <div className={classes.SocialFloating}>
        <SocialIcon url="https://wa.me/541161700196" network="whatsapp" target="_blank" style={{ height: 70, width: 70 }}/>
      </div>
      <small>&copy; Copyright {currentYear}, Miguel Chirinos</small>
    </footer>
  )
}

export default Contact
