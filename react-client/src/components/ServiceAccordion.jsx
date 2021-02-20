import React, {useState} from 'react';
import { Accordion, Card, Button, Col } from 'react-bootstrap';
import ServiceItemForm from './ServiceItemForm.jsx';


const ServiceAccordion = (props) => {


  const [accordionToggle] = useState(0);

  return(
    <div>
      <Accordion defaultActiveKey="0" className="dark-text service coll">

      <Card>
        <Card.Header className="transparent-background">
          <Accordion.Toggle as={Button} variant="outline-dark" eventKey="1">
            Add a service to this vehicle
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <ServiceItemForm fn={props.fn}/>
        </Accordion.Collapse>
      </Card>

    </Accordion>
    </div>
  )
}

export default ServiceAccordion;
