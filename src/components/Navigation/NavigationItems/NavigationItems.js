import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="#about">WHO</NavigationItem>
    <NavigationItem link="#works">WHAT</NavigationItem>
    <NavigationItem link="#music">WHY</NavigationItem>
    <NavigationItem link="#photos">HOW</NavigationItem>
    <NavigationItem link="#contact">WHERE</NavigationItem>
  </ul>
)

export default NavigationItems
