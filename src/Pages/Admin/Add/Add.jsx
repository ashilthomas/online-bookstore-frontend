import React, { useState } from 'react'
import "./Add.css"
import axios from 'axios'
import Sidebar from '../../../Components/Sidebar/Sidebar'



function Add() {

  
   
    const [image,setImage]=useState(false)
    const [data,setData]=useState({
        name:"",
        description:'',
        author:"",
        price:"",
        category:"Salad"
    })
 ;
const onchangeHandiler =(event)=>{
    const name = event.target.name;
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
}
   const onsubmitHandiler = async(event)=>{
          event.preventDefault()

          const formData = new FormData()
          formData.append('name',data.name)
          formData.append('description',data.description)
          formData.append('author', data.author); // Append author
          formData.append('price', Number(data.price));
          formData.append('category',data.category)
          formData.append("image",image)

          const response = await axios.post("http://localhost:3003/products/addbooks",formData)

          if(response.data.success){
               setData({
               name:"",
                description:'',
                author:"",
                price:"",
                category:"Horror"
               })
               setImage(false)
               toast.success(response.data.message)
          }else{
             toast.error(res.data.message)
          }
   }
   console.log(data);
  
  return (
    <div className='admin-panel'>
         <Sidebar/>


   
    <div className='add'>
        <form className='flex-col' onSubmit={onsubmitHandiler}>
            <div className="add-img-upload flex-col">
               <p>Upload Image</p>
               <label htmlFor="image">
                <img src={image?URL.createObjectURL(image) : "https://th.bing.com/th/id/R.9eacd6a14ccd9bbb74794f60dd355d15?rik=BGl%2bye7biNJuAQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fupload-png-what-file-formats-can-i-upload-to-weholi-512.png&ehk=vk7cGjK%2bC8sS2qsW3dKNBNMF9DvaBRVprno%2b4IHu6%2bg%3d&risl=&pid=ImgRaw&r=0"} alt="" />
               </label>
               <input  className='square border' onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                   <p>Product name</p>
                   <input  className='square border' onChange={onchangeHandiler} value={data.name} type="text" name='name' placeholder='Type here' required />
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
                        <option value="History">History</option>
                        <option value="Sci-fic">Sci-fic</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Biography">Biography</option>
                        <option value="Drama">Drama</option>
                        <option value="Thriller">Thriller</option>
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