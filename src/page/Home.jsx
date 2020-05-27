import React from 'react'
import Head from '../components/Head'
import Slider from '../components/Slider'
import Foot from '../components/Foot'

function Home() {
   
    return (
<div className="ms-main-container">
  <div className="ms-preloader" />
 
      <Head/>
 
      <Slider/>
  
      <Foot/>
</div>
    )
}

export default Home
