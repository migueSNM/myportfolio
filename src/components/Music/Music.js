import React from 'react'
import classes from './Music.module.css'
import musicPhoto1 from '../../assets/images/music1.jpg'
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
        )`
    }}
    >
      {isDesktop && <div className={classes.Photo}>
        <img src={musicPhoto1} alt="Why"/>
      </div>}
      <ReactPlayer 
        url='https://soundcloud.com/migue-chirinos'
        width={isDesktop ? '50%' : '100%'}
        height='inherit'
        className={classes.ReactPlayer}
        config={{
          soundcloud: {
            show_artwork: false
          }
        }}
      />
    </section>
  )
}

export default Music
