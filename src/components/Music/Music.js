import React from 'react'
import classes from './Music.module.css'
import MusicCard from './MusicCard/MusicCard'
import heroImage from '../../assets/images/hero2.jpg'
import musicPhoto1 from '../../assets/images/music1.jpg'
import musicPhoto2 from '../../assets/images/music2.jpg'
import musicPhoto3 from '../../assets/images/music3.jpg'
import musicPhoto4 from '../../assets/images/music4.jpg'

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
      <div className={classes.MusicCards}>
        <MusicCard 
          backgroundImage={musicPhoto1}
          url='https://soundcloud.com/migue-chirinos/odise'
        />
        <MusicCard 
          backgroundImage={musicPhoto2}
          url='https://soundcloud.com/migue-chirinos/sativa'
        />
        <MusicCard 
          backgroundImage={musicPhoto3}
          url='https://soundcloud.com/migue-chirinos/spaceshooter-main-theme'
        />
        <MusicCard 
          backgroundImage={musicPhoto4}
          url='https://soundcloud.com/migue-chirinos/combat-music-for-videogames'
        />
      </div>
    </section>
  )
}

export default Music
