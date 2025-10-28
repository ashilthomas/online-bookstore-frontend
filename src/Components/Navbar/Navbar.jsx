import React, { useContext, useMemo, useState } from "react";
import "./Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FaUser } from "react-icons/fa6";


function Navbar({ setSignShow }) {
  const [isOpen, setIsOpen] = useState(false);

  const { setSearch, cartAllItems } = useContext(StoreContext);

  const token = sessionStorage.getItem('token');


  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openSearch = () => {
    setSearch(true);
  };

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

 
  const handleButtonClick = () => {
    toggleDropdown();
  };


  const handleDropdownClick = (event) => {
    event.stopPropagation(); 
  };
  const tokenRelease = () => {
    if(token){
      sessionStorage.removeItem('token');
    setIsOpen(true);
    }
   
  };

  const style = { color: "black" };

  // Total items in cart (sum of quantities)
  const cartCount = useMemo(() => {
    try {
      if (!cartAllItems || !Array.isArray(cartAllItems)) return 0;
      return cartAllItems.reduce((sum, item) => sum + (item?.quantity || 0), 0);
    } catch (e) {
      return 0;
    }
  }, [cartAllItems]);
  return (
    <nav className="navbar animate__animated animate__fadeInDown">
      <div className="navbar-container">
        <Link to={"/"}>
          <h2 className="fw-bold">
            Logo
            <span style={{ color: "#FF1616", cursor: "pointer" }}>
              Books
            </span>{" "}
          </h2>
        </Link>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {/* Primary navigation */}
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <span className="nav-links" role="button">About</span>
          </li>
          <li className="nav-item">
            <NavLink to="/shope" className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}>
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <span className="nav-links" role="button">Contact</span>
          </li>
          <li className="nav-item">
            <NavLink to="/product" className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}>
              Blog
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? (
            <AiOutlineClose size={30} style={style} />
          ) : (
            <GiHamburgerMenu size={30} style={style} />
          )}
        </div>
        <div className="right-nav">
          <span onClick={openSearch}>
            <BsSearch size={20} />
          </span>
          <Link to={"/cart"} className="cart-icon">
            <IoCartOutline size={25} />
            {cartCount > 0 && (
              <span className="cart-count" aria-label={`Cart items: ${cartCount}`}>{cartCount}</span>
            )}
          </Link>

          
            <div className="dropdown">
              <span onClick={handleButtonClick} className="dropbtn">
                {" "}
                <FaUser size={20} />
              </span>

              <div
                id="myDropdown"
                className={`dropdown-content ${dropdown ? "show" : ""}`}
                onClick={handleDropdownClick}
              >
                <Link to={"/admin"}>
                 Admin
                </Link>
                <Link to={"/userdetails"}>
                User
                </Link>

                <span  onClick={tokenRelease}>
               
                  Logout
                </span>
              </div>
            </div>
            {
              token ? "" : <button className="sign-btn" onClick={() => setSignShow(true)}>Sign</button>
            }
         
           
      
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
