import React from 'react'
import classes from './Music.module.css'
import heroImage from '../../assets/images/hero2.jpg'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'


const Music = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })

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
      {isDesktop && <div className={classes.Photo}>
        <img src={heroImage} alt="Why"/>
      </div>}
      <ReactPlayer 
        url='https://soundcloud.com/migue-chirinos'
        width={isDesktop ? '50%' : '100%'}
        className={classes.ReactPlayer}
      />
    </section>
  )
}

export default Music
