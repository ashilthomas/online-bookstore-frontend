

import React from 'react';
import "./BooksCard.css";
import { Card } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function BooksCard({ title, author, price, image, id }) {
  return (
    <div>
      <Card className='border-0 book-card'>
          <Link to={`bookdetailes/${id}`}>
          <img  className='card-img' src={`http://localhost:3003/${image}`} alt={`${title} cover`} />
     </Link>
        <Card.Body className='border-0'>
      
          <Card.Title>{title}</Card.Title>
        
          
            <div className="card-info">
              <div className="card-author">{author}</div>
            
            </div>  <div className="card-content">
            <Rating name="rating" defaultValue={4} size="small" />
            <div className="card-price">${price}</div>
          </div>
        </Card.Body>
      </Card> 
    </div>
  ); 
}

export default BooksCard;
