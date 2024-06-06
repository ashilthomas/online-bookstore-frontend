import React from "react";
import "./Featured.css";
import { Col, Row } from "react-bootstrap";
import Hero from "../Hero/Hero";

function Featured() {
  return (
    <div className="featured-section">
    <div className="container">
      <Row>
        <Col className="col-12 col-md-9 col-sm-12">
          <h2 className="mb-5 text-center">Featured This Week</h2>
          <img 
            style={{ width: "100%", height: "300px", objectFit: "cover" }} 
            src="https://uicookies.com/wp-content/uploads/2020/07/books-website-templates.jpg" 
            alt="" 
          />
        </Col>
        <Col className="col-12 col-md-3 col-12">
          <div
            className="featured-right"
            style={{
              backgroundColor: "black",
            }}
          >
            <img
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
              src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/ad.jpg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  </div>
  
  
  );
}

export default Featured;
