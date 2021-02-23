import React ,{ useState }from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup'

const ServiceItemForm = (props) => (
  <Formik
    initialValues={{ milage: '', service: '', note:'', cost: '' }}
    onSubmit={ (values, { setSubmitting }) => {
      console.log(values)
      // props.fn(values)
    }}

    validationSchema = { Yup.object().shape({
      milage: Yup.number()
        .required('Required'),
      service: Yup.string()
        .required('Required'),
      note: Yup.string()
        .required('Required'),
      cost: Yup.number()
        .required('Required')
    })}
    >


      {
        props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
            handleBlur
          } = props;


          return (
            <Form>
              <Form.Group controlId="formBasicMilage" >
                <Form.Label>Current Milage</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="milage"
                  placeholder="Entry must be a number"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted" />
                {errors.milage && touched.milage && (
                  <div className="input-feedback">{errors.milage}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicService">
                <Form.Label>Service Completed</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="service"
                  onChange={handleChange}
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
                {errors.service && touched.service && (
                  <div className="input-feedback">{errors.service}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicNotes">
                <Form.Label>Additional Notes</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="note"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted" />
                {errors.note && touched.note && (
                  <div className="input-feedback">{errors.note}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicCost">
                <Form.Label>Cost of service</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="cost"
                  placeholder="Do not include $ sign"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted" />
                {errors.cost && touched.cost && (
                  <div className="input-feedback">{errors.cost}</div>
                )}
              </Form.Group>


              <Button
                  className="btn"
                  variant="outline-dark"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >Submit!</Button>

            </Form>
          );

        }
      }

 </Formik>
)

export default ServiceItemForm;