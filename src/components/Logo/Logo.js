import React from 'react'

import runeLogo from '../../assets/images/rune-logo.png'
import classes from './Logo.module.css'

const Logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={runeLogo} alt="RuneLogo"/>
  </div>
)

export default Logo
