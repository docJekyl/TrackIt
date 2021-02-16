import React from 'react';
import {Container, Card, Row, Col } from 'react-bootstrap'

const ServiceItems =  (props) => (
  <div>
    <Card>
      <Container className="dark-text service">
        <Row> Milage: {props.item.milage} </Row>
        <Row> Service Done: {props.item.service}</Row>
        <Row> Comments: {props.item.note}</Row>
        <Row> Cost: {props.item.cost}</Row>
      </Container>
    </Card>
  </div>
)

export default ServiceItems;