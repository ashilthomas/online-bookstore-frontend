import React, { useContext } from 'react'
import Cards from '../Cards/Cards'
import { StoreContext } from '../../Context/StoreContext'

function Recomended() {
  const {product}=useContext(StoreContext)

  const slicedProducts = product.slice(0,6)
  return (
    <div>

   <div className="search-items mt-5">
   <div className="bg-white">
     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
       <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Recomended
       </h2>

       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
       
         {slicedProducts &&
          slicedProducts.map((item) => (
             <Cards
               key={item._id}
               title={item.title}
               author={item.author}
               price={item.price}
               image={item.image}
               id={item._id}
             
             />
           ))}
       </div>
     </div>
   </div>
 </div>
      
    </div>
  )
}

export default Recomended