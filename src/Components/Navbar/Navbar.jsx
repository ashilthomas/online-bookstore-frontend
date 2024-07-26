import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FaUser } from "react-icons/fa6";


function Navbar({ setSignShow }) {
  const [isOpen, setIsOpen] = useState(false);

  const { setSearch } = useContext(StoreContext);

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
          {" "}
          {/* Conditional CSS class for responsiveness */}
          <li className="nav-item">
            {" "}
            <Link to={"/"}>
              <a href="" className="nav-links">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a href="" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link to={"/shope"}>
              <a href="" className="nav-links">
                Shope
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a href="" className="nav-links">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-links">
              <Link to={"/product"}> Blog</Link>
            </a>
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
          <Link to={"/cart"}>
            <IoCartOutline size={25} />
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
              token ? "": <button onClick={() => setSignShow(true)}>Sign</button>
            }
         
           
      
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
