import React, { useContext, useState } from "react";
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
import Searchfilter from "./Search/Searchfilter";
import Loading from "./Components/Loading/Loading";
import { StoreContext } from "./Context/StoreContext";
import UserDetails from "./Pages/UserDetails/UserDetails";
import ProtectedRoutes from "./Components/Utils/ProtectedRoutes";

function App() {
  const [signShow, setSignShow] = useState(false);
  const { loading } = useContext(StoreContext);
  return (
    <div>
    <BrowserRouter>
      {loading && <Loading />}
      {signShow ? <Sign setSignShow={setSignShow} /> : null}

      <Searchfilter />
      <Navbar setSignShow={setSignShow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Adminpage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/list"
          element={
            <ProtectedRoutes>
              <List />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoutes>
              <Add />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/shope"
          element={
            <ProtectedRoutes>
              <Bookspage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/userdetails"
          element={
            <ProtectedRoutes>
              <UserDetails />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/bookdetailes/:id"
          element={
            <ProtectedRoutes>
              <BookDetailes />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
