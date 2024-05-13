import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Bestselling from '../../Components/Bestselling/Bestselling'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Featured from '../../Components/Featured/Featured';
import LatestItems from '../../Components/LatestItems/LatestItems';
import Subscribe from '../../Components/Subscribe/Subscribe';



function Home() {
  return (
   <section>
      <Hero/>
      <Bestselling/>
      <Featured/>
      <LatestItems/>
      <Subscribe/>
      
    
   </section>
      
   
  )
}

export default Home