import React, { useState } from "react";
import "./Sign.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


function Sign({ setSignShow }) {
  const navigate = useNavigate()
  const [currState, setCurrState] = useState("login");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = "";
    if (currState === "login") {
      newUrl = "https://online-bookstore-backend-4bsl.onrender.com/user/login";
    } else {
      newUrl = "https://online-bookstore-backend-4bsl.onrender.com/user/register";
    }
    try {
      const res = await axios.post(newUrl, user, {
        withCredentials: true,
      });
  
      if (res.data.success) {
        toast(res.data.message);
        setSignShow(false);
  
        if (currState === "login") {
          // Handle login specific logic here
        } else if (currState === "signUp") {
          setCurrState("login");
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === "Token expired") {
          alert("Your session has expired. Please log in again.");
          navigate('/');
        } else {
          alert("Unauthorized access.");
        }
      } else {
        toast.error(error.response ? error.response.data.message : "An error occurred");
      }
    }
  };
  

  return (
    <div id="overlay">
      <form action="" className="sign-popup-container" onSubmit={onLogin}>
        <div className="sign-popup-title">
          <h2>{currState}</h2>
          <span onClick={() => setSignShow(false)}>X</span>
        </div>
        <div className="sign-popup-input">
          <ToastContainer />
          {currState == "login" ? (
            <></>
          ) : (
            <input
              type="text"
              onChange={onChangeHandler}
              value={user.name}
              name="name"
              placeholder="your name"
              required
            />
          )}
          <input
            type="email"
            onChange={onChangeHandler}
            value={user.email}
            name="email"
            placeholder="your email"
            required
          />
          <input
            type="password"
            onChange={onChangeHandler}
            value={user.password}
            name="password"
            placeholder="your password"
          />
        </div>
        <button>{currState == "sign Up" ? "create account" : "login"}</button>
        <div className="sign-popup-conditon">
          <input type="checkbox" />
          <p>By contiuing i agree to the terms of use & privacy policy</p>
        </div>

        {currState == "login" ? (
          <p>
            create a new account?{" "}
            <span onClick={() => setCurrState("sign Up")}>click here</span>
          </p>
        ) : (
          <p>
            alredy have an account{" "}
            <span onClick={() => setCurrState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Sign;
