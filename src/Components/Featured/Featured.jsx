import React from 'react'
import "./Featured.css"
import { Col, Row } from 'react-bootstrap'
import Hero from '../Hero/Hero'

function Featured() {
  return (
    <div className="featured-section"  >
      
      <div className="container">
      <Row>
     
        <Col className=' col-12 col-md-9 col-sm-12'>
        <h2 className='mb-5 text-center'>Featured This Week</h2>
           <Hero/>
        </Col>
        <Col className='col-12 col-md-3 col-12'>
         <div className="featured-right" style={{backgroundColor:"black" ,height:"100%", width:"300px"}}>
           <img style={{width:"100%", height:"100%"}} src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/ad.jpg" alt="" />

         </div>
        </Col>
      </Row>
      </div>

    </div>
  )
}

export default Featured