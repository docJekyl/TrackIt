import React from 'react';
import Vehicle from './Vehicle.jsx';

const VehicleList = (props) => (

  <div>
    <h3> Welcome Back to TrackIt! </h3>
    <h4>Choose a vehicle to view or update your records.</h4>
    { props.vehicles.map(vehicle =>
      <Vehicle
        vehicle={vehicle}
        key={vehicle._id}
        fn={props.fn}
      />)}
  </div>
)

export default VehicleList;