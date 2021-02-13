import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import VehicleList from './components/VehicleList.jsx';
import ServiceList from './components/ServiceList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      selected: null,
    }
    this.getVehicles = this.getVehicles.bind(this);
    this.setSelectedVehicle = this.setSelectedVehicle.bind(this);
    this.getService = this.getService.bind(this);
  }

  componentDidMount() {
    this.getVehicles();
  }

  getVehicles() {
    axios.get('http://localhost:3000/vehicle')
      .then((result) =>{ this.setState({ vehicles: result.data }) })
      .catch((err) => console.log(err, 'error'));
  }

  getService(id) {
    axios.get('http://localhost:3000/vehicle', { id })
      .then((result) =>{ this.setState({ vehicles: result.data }) })
      .catch((err) => console.log(err, 'error'));
  }

  setSelectedVehicle(selection) {
    this.setState({selected: selection})
  }



  render () {
    var { vehicles } = this.state;
    var { selected } = this.state;

    return (
      <div>
        {selected
        ? <ServiceList vehicle={selected} />
        : <VehicleList vehicles={vehicles} fn={this.setSelectedVehicle} />

        }
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));