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

  const token = localStorage.getItem("userData");

  console.log("tonefs",token);

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

  const closeDropdown = () => {
    setDropdown(false);
  };

  // Handle the click event on the dropdown button to toggle the dropdown
  const handleButtonClick = () => {
    toggleDropdown();
  };

  // Handle the click event on the dropdown content to prevent it from closing the dropdown
  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the parent elements
  };
  const tokenRelease = () => {
    setIsOpen(true)
    // sessionStorage.removeItem("userToken");
    localStorage.removeItem("userData");
  };


  const style = { color: "black" };
  return (
    <nav className="navbar animate__animated animate__fadeInDown">
      <div className="navbar-container">
        <Link to={"/"}>
          <h2 className="fw-bold">
          Logo<span style={{ color: "#FF1616",cursor:"pointer" }}>Books</span>{" "}
        </h2>
        </Link>
      

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {" "}
          {/* Conditional CSS class for responsiveness */}
          <li className="nav-item">  <Link to={"/"}>
            <a href="" className="nav-links">
           Home
            </a></Link>
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
            </a></Link>
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
          {token? (
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
                <a href="#home">Admin</a>
               </Link>
               
                <a href="#about">User</a>
                <a href="#" onClick={tokenRelease}>Logout</a>
               
              </div>
            </div>
          ) : (
            <button onClick={() => setSignShow(true)}>Sign</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
