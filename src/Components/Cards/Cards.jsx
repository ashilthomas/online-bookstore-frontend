
import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function Cards({ title, author, price, image, id, setSearch }) {
  const [hovered, setHovered] = useState(false);
 

  return (
    <div onClick={()=>setSearch(false)}
      className="group relative"
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50 relative">
        <img   
          src={`http://localhost:3003/${image}`}
          alt="product image"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />

        {/* {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <BsCartPlus size={36} color="white" />
          </div>
        )} */}
      </div>
      <Link to={`/bookdetailes/${id}`}>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700"> 
             <a href="">   <span aria-hidden="true" className="absolute inset-0" />
               {title}</a>
             
            
            </h3>
            <p className="mt-1 text-sm text-gray-500">{author}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{price}</p>
            <Rating name="size-small rating" defaultValue={2} size="small" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
