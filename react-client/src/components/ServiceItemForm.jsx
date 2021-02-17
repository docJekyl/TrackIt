import React from 'react';
import {
  Container, Form, Button, Col,
} from 'react-bootstrap';


class NewVehicleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      milage: 0,
      service: '',
      note: '',
      cost: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.fn(this.state);
    this.resetForm()
  }

  resetForm() {
    this.setState({
      milage: 0,
      service: '',
      note: '',
      cost: 0,
    })
  }


  render() {

    return (
      <Form>
        <Form.Group controlId="formBasicMilage">
          <Form.Label>Current Milage</Form.Label>
          <Form.Control
            required
            type="number"
            name="milage"
            placeholder="Entry must be a number"
            value={this.state.milage}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicService">
          <Form.Label>Service Completed</Form.Label>
          <Form.Control
            required
            as="select"
            name="service"
            value={this.state.service}
            onChange={this.handleChange}
            >
            <option />
            <option>Oil Change</option>
            <option>Chain Lube</option>
            <option>Clutch Cable Lube</option>
            <option>Lights and Indicators</option>
            <option>Battery</option>
            <option>Front Tire Change</option>
            <option>Rear Tire Change</option>
            <option>Routine Maintenance</option>
          </Form.Control>
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicNotes">
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control
            required
            type="text"
            name="note"
            value={this.state.note}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted" />
        </Form.Group>


        <Form.Group controlId="formBasicCost">
          <Form.Label>Cost of service</Form.Label>
          <Form.Control
            required
            type="number"
            name="cost"
            value={this.state.cost}
            placeholder="Do not include $ sign"
            onChange={this.handleChange}
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