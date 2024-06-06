import React from 'react'
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';

const orders = [
  {
    restaurant: 'McDonald\'s',
    transactionId: '#ACB12345458',
    amount: '$40.00',
    time: 'Today, 3:00 PM',
    image: 'path_to_image1.jpg',
  },
  {
    restaurant: 'Starbucks',
    transactionId: '#ACB12345459',
    amount: '$100.00',
    time: 'Yesterday, 6:00 PM',
    image: 'path_to_image2.jpg',
  },
  {
    restaurant: 'Pizza Hut',
    transactionId: '#ACB123456678',
    amount: '$60.00',
    time: '25 March 2024, 8:00 PM',
    image: 'path_to_image3.jpg',
  },
];
function UserDetails() {
  return (
    <Container fluid className="p-4 container">
    <Row>
      <Col md={3}>
        <Card className="mb-4">
          <Card.Img variant="top" src="path_to_profile_image.jpg" />
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
        {orders.map((order, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Row>
                <Col md={2}>
                  <img src={order.image} alt={order.restaurant} className="img-fluid rounded-circle" />
                </Col>
                <Col md={8}>
                  <h5>{order.restaurant}</h5>
                  <p>Transaction Id: {order.transactionId}</p>
                  <p>Total Amount: {order.amount}</p>
                </Col>
                <Col md={2} className="text-end">
                  <p>{order.time}</p>
                  <Button variant="outline-primary">Details</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  </Container>
  )
}

export default UserDetails