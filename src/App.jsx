import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Sign from "./Sign/Sign";
import "animate.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookspage from "./Components/Bookspage/Bookspage";
import BookDetailes from "./Pages/BookDetailes/BookDetailes";
import Cart from "./Pages/Cart/Cart";
import Adminpage from "./Pages/Admin/Adminpage/Adminpage";
import Add from "./Pages/Admin/Add/Add";
import List from "./Pages/Admin/List/List";
import Searchfilter from './Search/Searchfilter';



function App() {
  const [signShow, setSignShow] = useState(false);
  return (
    <div>
      
      <BrowserRouter>
        {signShow ? <Sign setSignShow={setSignShow} /> : null}
        <Searchfilter/>
        <Navbar setSignShow={setSignShow} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shope" element={<Bookspage />} />
          <Route path="bookdetailes/:id" element={<BookDetailes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Adminpage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
