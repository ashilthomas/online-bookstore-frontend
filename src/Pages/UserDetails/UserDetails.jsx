import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
const token = sessionStorage.getItem("token")


function UserDetails() {
    const [orderDetails,setOrder]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("https://online-bookstore-backend-4bsl.onrender.com/orders/allorders", {
              headers: {
                'Authorization': ` ${token}` 
              }
            });
            console.log("Orders data:", res.data);
            setOrder(res.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);
  return (
    <Container fluid className="p-4 container">
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" />
            <Card.Body className="text-center">
              <Card.Title>Mark Jecno</Card.Title>
              <Card.Text>mark-jecno@gmail.com</Card.Text>
            </Card.Body>
          </Card>
          <ListGroup>
            <ListGroup.Item>Change Profile</ListGroup.Item>
            <ListGroup.Item active>My Order</ListGroup.Item>
            <ListGroup.Item>Saved Address</ListGroup.Item>
            <ListGroup.Item>Saved Card</ListGroup.Item>
            <ListGroup.Item>Help</ListGroup.Item>
            <ListGroup.Item>Setting</ListGroup.Item>
            <ListGroup.Item>Log Out</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <h2 className="mb-4">My Order</h2>
          {orderDetails.map((order, index) => (
            <Card key={index} className="mb-3 ">
              <Card.Body>
                <Row>
                  <Col md={2}>
                    <img
                      src={`https://online-bookstore-backend-4bsl.onrender.com/${order.product.image}`}
                      alt={order.product.author}
                      className="img-fluid w-100%"
                    />
                  </Col>
                  <Col md={8}>
                    <h5>{order.product.category}</h5>
                    <p>Transaction Id: {order.razorpay_payment_id}</p>
                    <p>Total Amount: {order.product.price}</p>
                  </Col>
                
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetails;
