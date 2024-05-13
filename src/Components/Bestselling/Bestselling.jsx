import React, { useContext } from 'react'
import "./Bestselling.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BooksCard from '../BooksCard/BooksCard';
import { StoreContext } from '../../Context/StoreContext';


function Bestselling() {
  const{product}=useContext(StoreContext)
    var settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    
                }
            },
           {
            breakpoint: 976,
            settings: {
                slidesToShow: 3,
               
            }
           },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                   
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                   
                }
            }
        ]
      };
  return (
    <div className='best-selling-section'>
        <div className="container">
            <h2 className='mb-5 text-center'>Best Selling Books Ever</h2>
            <Slider {...settings}>
              {
                product.map((items)=>(
  <div>
      <BooksCard title={items.title} author={items.author}price={items.price} image={items.image} id={items._id} />
      </div>

                ))
              }
    
     
    </Slider>
        </div>
    </div>
  )
}

export default Bestselling