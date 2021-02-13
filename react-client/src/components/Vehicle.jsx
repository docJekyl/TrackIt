import React from 'react';

const Vehicle = (props) => (
  <div onClick={() => {props.fn(props.vehicle)}}>
    { props.vehicle.make }  {props.vehicle.model}
  </div>
)

export default Vehicle;