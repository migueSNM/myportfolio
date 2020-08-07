import React from 'react'
import classes from './Works.module.css'
import WorkCard from './WorkCard/WorkCard'
import worksPhoto1 from '../../assets/images/works1.jpg'
import worksPhoto2 from '../../assets/images/works2.jpg'
import worksPhoto3 from '../../assets/images/works3.jpg'

const Works = () => {
  return (
    <section className={classes.Works} id="works">
      <div className={classes.Title}>
        Qué
      </div>
      <div className={classes.WorkCards}>
        <WorkCard 
          title='FUSO' 
          backgroundImage={worksPhoto1} 
          primaryText='Funk Prog'
          secondaryText='Bajista y Composición'
        />
        <WorkCard 
          title='SESION' 
          backgroundImage={worksPhoto2}
          primaryText='Bajista sesionista'
          secondaryText={['Proyecto Paimun', <br/>, 'Amira Binn']}
        />
        <WorkCard 
          title='DEV' 
          backgroundImage={worksPhoto3}
          primaryText='Desarrollo Web Full Stack'
          secondaryText={['React JS', <br/>, 'AWS Serverless']}
        />
      </div>
    </section>
  )
}

export default Works
