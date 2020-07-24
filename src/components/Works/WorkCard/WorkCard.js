import React from 'react'
import classes from './WorkCard.module.css'

const WorkCard = (props) => {

  const style = {
    backgroundImage: `url("${props.backgroundImage}")`

  }

  return (
    <div className={classes.WorkCard} style={style}>
      {props.title}
    </div>
  )
}

export default WorkCard
