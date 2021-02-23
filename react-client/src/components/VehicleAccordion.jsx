import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import NewVehicleForm from './NewVehicleForm.jsx';



const VehicleAccordion = (props) => {

  const [ acc, setAcc] = useState();

  var accordionToggle = () => {
    setAcc(0)
  }

  return(
    <Accordion defaultActiveKey="0" className="accordion coll">
    <Card >
      <Card.Header>
        <Accordion.Toggle as={Button} variant="outline-dark" eventKey={ `${acc}` }>
          Add a vehicle to your garage
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={ `${acc}` }>
        <NewVehicleForm  fn={props.fn} toggle={accordionToggle} />
      </Accordion.Collapse>
    </Card>
  </Accordion>
  )
}

export default VehicleAccordion;