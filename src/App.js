import React from 'react';
import classes from './App.module.css';
import Layout from './hoc/Layout/Layout'
import About from './components/About/About'
import Works from './components/Works/Works'
import Music from './components/Music/Music'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <About/>
        <Works/>
        <Music/>
        <Contact/>
      </Layout>
    </div>
  );
}

export default App;
