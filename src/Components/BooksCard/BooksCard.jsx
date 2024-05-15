import React from 'react'
import "./BooksCard.css"
import { Button, Card, Image } from 'react-bootstrap'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'

function BooksCard({title,author,price,image,id}) {
  return (
    <div>

        <Card className='border-0' style={{maxWidth: '210px',border: 'none'}}>
        <Link to={`bookdetailes/${id}`}>
        <img className='card-img' src={`http://localhost:3003/${image}`} alt="" />
        
        </Link>
      
      <Card.Body className='border-0'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          
        <div className="card-content">
        
          
        <div className="bbb_info clearfix">
         <div className="card-name"><a href="#">{author}</a></div>
         <Rating name="size-small rating" defaultValue={2} size="small" />
        </div>
        <div className="card-price"><a href="#">${price}</a></div>
      </div> 
        </Card.Text>
       
      </Card.Body>
    </Card>
  
    </div>
  )
}

export default BooksCard