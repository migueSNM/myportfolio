import React from 'react'
import classes from './About.module.css'
import whoImage from '../../assets/images/who.jpg'


const About = () => {
  return (
    <section className={classes.About}>
      <div className={classes.Photo}>
        <img src={whoImage} alt="Who"/>
      </div>
      <div className={classes.Description}>
        <div className={classes.Title}>
          Quién
        </div>
        <div className={classes.Text}>
          Bajista, pianista y sonidista, nacido en Buenos Aires en 1990. 
          Apasionado por la música y la programación. 
          Aficionado del MIDI.
        </div>
      </div>
    </section>
  )
}

export default About
