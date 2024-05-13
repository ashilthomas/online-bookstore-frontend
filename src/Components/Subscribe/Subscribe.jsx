import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Subscribe.css";


function Subscribe() {
  return (
    <div className="section">
      <div className="container">
        <Row>
          <Col className="col-12 col-md-6 mt-2">
            <div className="subscibe-aria-top-left">
              <h2>The History of Phipino</h2>
              <button>View Details</button>
            </div>
          </Col>
          <Col className="col-12 col-md-6 mt-2">
            <div className="subscibe-aria-top-right">
            <h2>The History of Phipino</h2>
              <button>View Details</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="subscrbe-aria mt-3 pt-5 pb-5  d-flex justify-content-center flex-column align-items-center ">
            <h1>Join Newsletter</h1>
            <p className="w-50 text-center">Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.</p>
            <form action="">
                <input type="text" placeholder="enter your email" />
                <button>Subscribe</button>
            </form>

              
             </div>
          </Col>
        </Row>
       
      </div>
    </div>
  );
}

export default Subscribe;
