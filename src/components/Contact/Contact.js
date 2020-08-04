import React from 'react'
import classes from './Contact.module.css'
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  var d = new Date()
  const currentYear = d.getFullYear()

  return (
    <footer className={classes.Contact} id="contact">
      <div className={classes.Social}>
        <SocialIcon url="https://twitter.com/miguechiri"/>
        <SocialIcon url="https://facebook.com/migue.chirinos"/>
        <SocialIcon url="https://instagram.com/migue.chirinos/"/>
        <SocialIcon url="https://soundcloud.com/migue-chirinos" />
        <SocialIcon url="https://youtube.com/channel/UC70ZyKpWqdFiGwiJrBiB1SA" />
      </div>
      <small>&copy; Copyright {currentYear}, Miguel Chirinos</small>
    </footer>
  )
}

export default Contact
