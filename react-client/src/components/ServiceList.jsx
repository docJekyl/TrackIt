import React from 'react';
import ServiceItems from './ServiceItems.jsx';
import ServiceForm from './ServiceForm.jsx';

const ServiceList = (props) => (
  <div>
    {console.log(props.vehicle)}
    <h3>Service items for your {props.vehicle.make}  {props.vehicle.model}</h3>
    <h4>Service history</h4>
    <ServiceItems />
    <div>
      <ServiceForm />
    </div>
  </div>
)

export default ServiceList;