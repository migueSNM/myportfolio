import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="#about">QUIEN</NavigationItem>
    <NavigationItem link="#works">QUE</NavigationItem>
    <NavigationItem link="#music">POR QUE</NavigationItem>
    <NavigationItem link="#contact">DONDE</NavigationItem>
  </ul>
)

export default NavigationItems
