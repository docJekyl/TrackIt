import React ,{ useState }from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup'

const NewVehicleForm = (props) => (
  <Formik
    initialValues = {{ make: 'a', model: 's', year: '1', nick_name: 'a', vin: 'a', milage_at_purchase:'1' }}
    onSubmit={ (values, { setSubmitting }) => {
      props.fn(values)
    }}

    validationSchema = { Yup.object().shape({
      make: Yup.string()
        .required('Required'),
      model: Yup.string()
        .required('Required'),
      year: Yup.number()
        .required('Required'),
      nick_name: Yup.string()
        .required('Required'),
      vin: Yup.string()
        .required('Required'),
      milage_at_purchase: Yup.number()
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
            <Form className="form dark-text" >
              <Form.Group controlId="formBasicMake">
                <Form.Label>Vehicle Make</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="make"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted" />
                { errors.make && touched.make && (
                  <div className="input-feedback">{errors.make}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicModel">
                <Form.Label>Vehicle Model</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="model"
                  onChange={handleChange}
                  />
                  <Form.Control.Feedback>testing</Form.Control.Feedback>
                <Form.Text className="text-muted" />
                { errors.model && touched.model && (
                  <div className="input-feedback">{errors.model}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicYear">
                <Form.Label>Vehicle year</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="year"
                  onChange={handleChange}
                  placeholder="This field only accepts a number"
                />
                <Form.Text className="text-muted" />
                { errors.year && touched.model && (
                  <div className="input-feedback">{errors.year}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicNickName">
                <Form.Label>Give This Sweet Ride a Nick Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="nick_name"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted" />
                { errors.nick_name && touched.nick_name && (
                  <div className="input-feedback">{errors.nick_name}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicVin">
                <Form.Label>Vehicle Vin Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="vin"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted" />
                { errors.vin && touched.vin && (
                  <div className="input-feedback">{errors.vin}</div>
                )}
              </Form.Group>


              <Form.Group controlId="formBasicMilage">
                <Form.Label>Current Milage</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="milage_at_purchase"
                  onChange={handleChange}
                  placeholder="This field only accepts a number"
                />
                <Form.Text className="text-muted" />
                { errors.milage_at_purchase && touched.milage_at_purchase && (
                  <div className="input-feedback">{errors.milage_at_purchase}</div>
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


export default NewVehicleForm;