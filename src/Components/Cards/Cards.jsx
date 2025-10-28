import React from "react";

import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function Cards({ name, author, price, image, id, setSearch }) {
  return (
    <div onClick={() => setSearch(false)} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50 relative">
        <img
          src={new URL(`${image}`, import.meta.env.VITE_API_URL || "https://online-bookstore-backend-4bsl.onrender.com/").toString()}
          alt="product image"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <Link to={`/bookdetailes/${id}`}> 
        <div className="mt-4">
          <div>
            <h3 className="text-lg text-gray-700">
            
            
                <span  className=" font-bold" />
                {name}
            
            </h3>
            <p className="mt-1 text-sm text-gray-500">{author}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-900">{price}</p>
            <Rating name="size-small rating" defaultValue={2} size="small" />
          </div>
        </div>
     </Link>
    </div>
  );
}

export default Cards;
