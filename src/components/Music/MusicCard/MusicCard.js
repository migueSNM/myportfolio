import React from 'react'
import ReactPlayer from 'react-player'

import classes from './MusicCard.module.css'

const MusicCard = (props) => {

  const style = {
    backgroundImage: `url("${props.backgroundImage}")`,
    filter: 'grayscale(1)'
  }

  return (
    <div className={classes.MusicCard} style={style}>
      <ReactPlayer 
        url={props.url}
        width={200}
        height={200}
        light
      />
    </div>
  )
}

export default MusicCard
