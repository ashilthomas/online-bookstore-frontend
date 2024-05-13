import React, { useState } from 'react'
import "./Add.css"
import axios from 'axios'
import Sidebar from '../../../Components/Sidebar/Sidebar'



function Add() {

    // const url = "kjsdfh"
   
    const [image,setImage]=useState(false)
    const [data,setData]=useState({
        title:"",
        description:'',
        author:"",
        price:"",
        category:"Salad"
    })
    console.log(data);
const onchangeHandiler =(event)=>{
    const name = event.target.name;
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
}
   const onsubmitHandiler = async(event)=>{
          event.preventDefault()

          const formData = new FormData()
          formData.append('name',data.title)
          formData.append('description',data.description)
          formData.append('author', data.author); // Append author
          formData.append('price', Number(data.price));
          formData.append('category',data.category)
          formData.append("image",image)

          const response = await axios.post("http://localhost:3003/products/addbooks",formData)

          if(response.data.success){
               setData({
                title:"",
                description:'',
                author:"",
                price:"",
                category:"Salad"
               })
               setImage(false)
               toast.success(response.data.message)
          }else{
             toast.error(res.data.message)
          }
   }
  
  return (
    <div className='admin-panel'>
         <Sidebar/>


   
    <div className='add'>
        <form className='flex-col' onSubmit={onsubmitHandiler}>
            <div className="add-img-upload flex-col">
               <p>Upload Image</p>
               <label htmlFor="image">
                <img src={image?URL.createObjectURL(image) : "http://localhost:5177/src/assets/upload_area.png"} alt="" />
               </label>
               <input  className='square border' onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                   <p>Product name</p>
                   <input  className='square border' onChange={onchangeHandiler} value={data.title} type="text" name='title' placeholder='Type here' required />
            </div>
            <div className="add-product-name flex-col">
                   <p>Author</p>
                   <input  className='square border' onChange={onchangeHandiler} value={data.author} type="text" name='author' placeholder='Type here' required />
            </div>
            <div className='add-product-description flex-col'>
            <p>Descrption</p>
                 <textarea  className='square border' onChange={onchangeHandiler} value={data.description} name="description"  rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className='add-category flex-col'>
                    <p>Product category</p>
                    <select onChange={onchangeHandiler} className='square border'  name="category" required >
                        <option value="Salad">History</option>
                        <option value="Rolls">Sci-fic</option>
                        <option value="Deserts">Horror</option>
                        <option value="Cake">love stories</option>
                        <option value="Pure Veg">Biography</option>
                        <option value="Pasta">Drama</option>
                        <option value="Noodiles">Thriller</option>
                    </select>

                </div>
                <div className="add-price flex-col">
                      <p>product price</p>
                      <input  className='square border' type="Number" onChange={onchangeHandiler} value={data.price} name="price" placeholder='$20' required />
                </div>

            </div>
            <button type='submit' className='add-btn'>Add</button>
        </form>
      
    </div>
    </div>
  )
}

export default Add