import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
import NewVehicleForm from './components/NewVehicleForm.jsx';
import VehicleList from './components/VehicleList.jsx';
import ServiceList from './components/ServiceList.jsx';
import VehicleAccordion from './components/VehicleAccordion.jsx';
import ServiceAccordion from './components/ServiceAccordion.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      serviceList: [],
      selected: null,
    }
    this.getVehicles = this.getVehicles.bind(this);
    this.addVehicle = this.addVehicle.bind(this);
    this.setSelectedVehicle = this.setSelectedVehicle.bind(this);
    this.getService = this.getService.bind(this);
    this.addService = this.addService.bind(this);
    this.returnToVehicles - this.returnToVehicles.bind(this);
  }

  componentDidMount() {
    this.getVehicles();
  }

  // Retrieves all vehicles
  getVehicles() {
    axios.get('http://localhost:3000/vehicle')
      .then((result) =>{ this.setState({ vehicles: result.data }) })
      .catch((err) => console.log(err, 'error'));
  }

  // Add a vehicle to the app
  addVehicle(vehicle) {
    axios.post('http://localhost:3000/vehicle', { vehicle })
    .then(() => this.getVehicles())
    .catch((err) => console.log(err))
  }

  // Get all service records associated with a vehicle
  getService(vehicleId) {
    axios.get(`http://localhost:3000/service?ID=${vehicleId}`)
      .then((result) =>{
        this.setState({ serviceList: result.data }) })
      .catch((err) => console.log(err, 'error'));
  }

  // add a service to the database for current vehicle
  addService(service) {
    service['vehicleId'] = this.state.selected._id;
    axios.post('http://localhost:3000/service', { service })
    .then(() => this.getService())
    .catch((err) => console.log(err, 'error'));
  }

  // click handler for viewing a vehicle's service
  setSelectedVehicle(selection) {
    this.setState({selected: selection})
    this.getService(selection._id)
  }

  // return
  returnToVehicles() {
    this.setState({selected: null});
  }

  render () {
    var { vehicles } = this.state;
    var { selected } = this.state;
    var { serviceList } = this.state

    return (
      <div mainDiv="mainDiv">
        <div className="appDiv" >
          {selected
          ? <div >
              <ServiceList vehicle={selected} serviceList={serviceList} />
              <ServiceAccordion fn={this.addService}/>
              <Button onClick={() => this.returnToVehicles()} variant="outline-dark" id="returnBtn">
                  Return to Vehicle Selection
              </Button>
            </div>

          : <div>
            <VehicleList vehicles={vehicles} fn={this.setSelectedVehicle} />
            <VehicleAccordion fn={this.addVehicle}/>
          </div>
          }

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));