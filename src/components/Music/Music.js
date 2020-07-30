import React from 'react'
import classes from './Music.module.css'
import heroImage from '../../assets/images/hero2.jpg'
import ReactPlayer from 'react-player'

const Music = () => {
  return (
    <section 
      className={classes.Music} 
      id="music"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          #7a7a7a,
          #00000000
        ), url(${heroImage})`
    }}
    >
      <div className={classes.Title}>
        Por qué
      </div>
      <ReactPlayer 
        url='https://soundcloud.com/migue-chirinos'
        width='50%'
        style={{
          marginRight: 0,
          marginLeft: 'auto'
        }}
      />
    </section>
  )
}

export default Music
