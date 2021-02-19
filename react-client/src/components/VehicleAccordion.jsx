import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import NewVehicleForm from './NewVehicleForm.jsx';



const VehicleAccordion = (props) => {

  return(
    <Accordion defaultActiveKey="0" className="accordion collapsing">
    <Card >
      <Card.Header>
        <Accordion.Toggle as={Button} variant="outline-dark" eventKey="1">
          Add a vehicle to your garage
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <NewVehicleForm  fn={props.fn}/>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  )
}

export default VehicleAccordion;