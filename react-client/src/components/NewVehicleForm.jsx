import React from 'react';
import {
  Container, Form, Button, Col,
} from 'react-bootstrap';


class NewVehicleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      year: '',
      nick_name:'',
      vin: 0,
      milage_at_purchase: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.fn(this.state);
  }


  render() {

    return (
      <Form>
        <Form.Group controlId="formBasicMake">
          <Form.Label>Vehicle Make</Form.Label>
          <Form.Control
            required
            type="text"
            name="make"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control
            required
            type="text"
            name="model"
            onChange={this.handleChange}
            />
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicYear">
          <Form.Label>Vehicle year</Form.Label>
          <Form.Control
            required
            type="number"
            name="year"
            onChange={this.handleChange}
            placeholder="This field only accepts a number"
          />
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicNickName">
          <Form.Label>Give This Sweet Ride a Nick Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="nick_name"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicVin">
          <Form.Label>Vehicle Vin Number</Form.Label>
          <Form.Control
            required
            type="text"
            name="vin"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicMilage">
          <Form.Label>Current Milage</Form.Label>
          <Form.Control
            required
            type="number"
            name="milage_at_purchase"
            onChange={this.handleChange}
            placeholder="This field only accepts a number"
          />
          <Form.Text className="text-muted" />
        </Form.Group>

        <Button
            className="btn"
            variant="outline-dark"
            onClick={this.handleSubmit}
          >Submit!</Button>

      </Form>
    );
  }
}

export default NewVehicleForm;