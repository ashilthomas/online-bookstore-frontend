import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"
import { StoreContext } from '../../Context/StoreContext'

function Sidebar() {
   
  return (
    <div className='sidebar'>
    <div className="sidebar-options">
        <NavLink to={'/add'} className="sidebar-option">
            <img src='' alt="" />
            <p>Add books</p>
        </NavLink>
        <NavLink to={'/list'} className="sidebar-option">
            <img src='' alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to={"/orders"} className="sidebar-option">
            <img src='' alt="" />
            <p>Order items</p>
        </NavLink>
    </div>

</div>
  )
}

export default Sidebar