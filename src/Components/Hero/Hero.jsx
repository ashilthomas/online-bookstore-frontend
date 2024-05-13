
import { Carousel, Image } from 'react-bootstrap';
import "./Hero.css"

import React from "react";


function Hero() {
  return (
    <div className="container">

  
    <Carousel className='carousel'>
    <Carousel.Item interval={1000}>
    <Image className='carousel-img' src="https://c.wallhere.com/photos/03/01/1920x1080_px_art_castle_CG_digital_fantasy_fire_Harry-1739769.jpg!d" fluid />;
   
      <Carousel.Caption className='carousel-caption'>
        <h3 className='animate__animated animate__fadeInDown'>Harry Potter and the Half-Blood Prince</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button className='carousel-btn'>Browse Store</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <img className='carousel-img' src="https://images.alphacoders.com/695/thumb-1920-695381.jpg" alt="" />
      <Carousel.Caption  className='carousel-caption'>
        <h3 className='animate__animated animate__fadeInDown'>The Lion, the Witch & the Wardrobe</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='carousel-btn'>Browse Store</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img className='carousel-img' src="https://wallup.net/wp-content/uploads/2019/07/24/418401-hobbit-unexpected-journey-lotr-adventure-fantasy-lord-rings.jpg" alt="" />
      <Carousel.Caption className='carousel-caption'>
        <h3 className='animate__animated animate__fadeInDown'>The Hobbit</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        <button className='carousel-btn'>Browse Store</button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
 
  </div>
  );
}

export default Hero;
