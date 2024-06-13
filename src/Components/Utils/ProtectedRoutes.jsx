import React from "react";
import {  useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 

function ProtectedRoutes({  children }) {
    const navigate = useNavigate();

    const token = Cookies.get("token");
   
    
  
    if (token === undefined) {
      navigate("/", { replace: true });
    }
    return children;
  };
  

export default ProtectedRoutes;