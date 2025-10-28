import React, { useState } from "react";
import "./Sign.css";
import instance from "../Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



function Sign({ setSignShow }) {
  const navigation = useNavigate()
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
    const endpoint = currState === "login" ? "user/login" : "user/register";
    try {
      const res = await instance.post(endpoint, user);

      if (res.data.success) {
        console.log(res.data);
        toast.success(res.data.message);
        sessionStorage.setItem('token', res.data.token);

        setSignShow(false);

        if (currState === "login") {
          sessionStorage.setItem('token', res.data.token);
          setSignShow(false);
          navigation('/')


          
        } else if (currState === "signUp") {
          setCurrState("login");
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return (
    <div id="overlay">
      <form className="sign-popup-container" onSubmit={onLogin}>
        <div className="sign-popup-title">
          <h2>{currState}</h2>
          <span onClick={() => setSignShow(false)}>X</span>
        </div>
        <div className="sign-popup-input">
          <ToastContainer />
          {currState !== "login" && (
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
            required
          />
        </div>
        <button>{currState === "signUp" ? "create account" : "login"}</button>
        <div className="sign-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "login" ? (
          <p>
            create a new account? <span onClick={() => setCurrState("signUp")}>click here</span>
          </p>
        ) : (
          <p>
            already have an account <span onClick={() => setCurrState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}


export default Sign;
