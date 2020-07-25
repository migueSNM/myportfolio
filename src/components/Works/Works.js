import React from 'react'
import classes from './Works.module.css'
import WorkCard from './WorkCard/WorkCard'
import worksPhoto1 from '../../assets/images/works1.jpg'
import worksPhoto2 from '../../assets/images/works2.jpg'
import worksPhoto3 from '../../assets/images/works3.jpg'

const Works = () => {
  return (
    <section className={classes.Works}>
      <WorkCard 
        title='FUSO' 
        backgroundImage={worksPhoto1} 
        primaryText='Funk y Progresivo'
        secondaryText='Bajista desde 2017'
      />
      <WorkCard 
        title='PAIMUN' 
        backgroundImage={worksPhoto2}
        primaryText='Folk Rock'
        secondaryText='Bajista desde 2019'
      />
      <WorkCard 
        title='SOFAR' 
        backgroundImage={worksPhoto3}
        primaryText='Eventos musicales en livings'
        secondaryText='Sonidista desde 2017'
      />
    </section>
  )
}

export default Works
