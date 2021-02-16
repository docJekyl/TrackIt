import React from 'react';
import ServiceItems from './ServiceItems.jsx';

const ServiceList = (props) => (
  <div>
    <h4>Service history for your {props.vehicle.make}  {props.vehicle.model}</h4>
    {props.serviceList.map((item) =>
    <ServiceItems
      key={item._id}
      item={item}
    />)}
  </div>
)

export default ServiceList;