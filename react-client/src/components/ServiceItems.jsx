import React from 'react';
import {Container, Card, Row, Col } from 'react-bootstrap'

const ServiceItems =  (props) => (
  <div>
    <Card>
      <Container className="dark-text service">
        <Row className="service"> Milage: {props.item.milage} </Row>
        <Row className="service"> Service Done: {props.item.service}</Row>
        <Row className="service"> Comments: {props.item.note}</Row>
        <Row className="service"> Cost: {props.item.cost}</Row>
      </Container>
    </Card>
  </div>
)

export default ServiceItems;