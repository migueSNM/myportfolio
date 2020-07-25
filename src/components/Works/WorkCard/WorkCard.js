import React from 'react'
import classes from './WorkCard.module.css'

const WorkCard = (props) => {

  const style = {
    backgroundImage: `url("${props.backgroundImage}")`
  }

  return (
    <div className={classes.WorkCard} style={style}>
      <div className={classes.TransBox}>
        <div className={classes.Title}>
          {props.title}
        </div>
        <div className={classes.Text}>
          <div className={classes.Primary}>
            {props.primaryText}
          </div>
          <div className={classes.Secondary}>
            {props.secondaryText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
