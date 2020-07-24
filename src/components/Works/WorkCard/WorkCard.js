import React from 'react'
import classes from './WorkCard.module.css'

const WorkCard = (props) => {

  const style = {
    backgroundImage: `url("${props.backgroundImage}")`

  }

  return (
    <div className={classes.WorkCard} style={style}>
      <div className={classes.Title}>
        {props.title}
      </div>
      <div>
        Texto
      </div>
    </div>
  )
}

export default WorkCard
