import React from 'react'
import classes from './About.module.css'
import whoImage from '../../assets/images/who.jpg'
import heroImage from '../../assets/images/hero1.jpg'

const About = () => {
  return (
    <section 
      id="about"
      className={classes.About} 
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          #00000000,
          #000000
        ), url(${heroImage})`
    }}>
      <div className={classes.PhotoTitle}>
        <div className={classes.Title}>
          Quién
        </div>
        <div className={classes.Photo}>
          <img src={whoImage} alt="Who"/>
        </div>
      </div>
      <div className={classes.Text}>
        Ingeniero electrónico haciendo Diseño Web.<br/>
        Toco el bajo y el piano.
      </div>
    </section>
  )
}

export default About
