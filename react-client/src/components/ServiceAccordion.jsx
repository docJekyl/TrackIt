import React, {useState} from 'react';
import { Accordion, Card, Button, Col } from 'react-bootstrap';
import ServiceItemForm from './ServiceItemForm.jsx';


const ServiceAccordion = (props) => {

  const [ acc, setAcc] = useState();

  var accordionToggle = () => {
    setAcc(0)
  }


  return(
    <div>
      <Accordion defaultActiveKey="0" className="dark-text service coll">

      <Card>
        <Card.Header className="transparent-background">
          <Accordion.Toggle as={Button} variant="outline-dark" eventKey={ `${acc}` }>
            Add a service to this vehicle
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={ `${acc}` }>
          <ServiceItemForm fn={props.fn} toggle={accordionToggle}/>
        </Accordion.Collapse>
      </Card>

    </Accordion>
    </div>
  )
}

export default ServiceAccordion;
