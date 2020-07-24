import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="#about">Who</NavigationItem>
    <NavigationItem link="#works">What</NavigationItem>
    <NavigationItem link="#music">Why</NavigationItem>
    <NavigationItem link="#photos">How</NavigationItem>
    <NavigationItem link="#contact">Where</NavigationItem>
  </ul>
)

export default NavigationItems
