import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="section-footer">
      <div className="container">
        <Row>
          <Col className="col-12 col-md-3 footer-one">
            <ul>
              <li>
                <h2>LOGO BOOKS</h2>
              </li>
              <li>
                <p>
                  Get the breathing space now, and we’ll extend your term at the
                  other end year for go.
                </p>
              </li>
              <li>
                <div className="social-icon">
                  <span>
                    <FaFacebook />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>
                    <FaYoutube />
                  </span>
                </div>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-3 footer-text">
            <h3>Book Category</h3>
            <ul>
              <li>History</li>
              <li>Horror - Thriller</li>
              <li>Love Stories</li>
              <li>Science Fiction</li>
              <li>Business</li>
            </ul>
          </Col>
          <Col className="col-12 col-md-3 footer-text">
            <h3>Book Category</h3>
            <ul>
              <li>Biography</li>
              <li>Astrology</li>
              <li>Digital Marketing</li>
              <li>Software Development</li>
              <li>Ecommerce</li>
            </ul>
          </Col>
          <Col className="col-12 col-md-3 footer-text">
            <h3>Book Category</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="copywrite">
              <h5>Copyright ©2024 All rights reserved | ashilthomas</h5>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
