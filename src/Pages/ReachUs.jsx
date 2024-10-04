import React, { useEffect, useState } from 'react';
import './ReachUs.css';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Mail, Phone } from 'lucide-react';
import { Container } from 'react-bootstrap';
import { postContact } from '../api/frontendApis/contactusApi';

function ReachUs() {
  // const [contact, setContact] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    remarks: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const sendInfo = async () => {
      try {
        const data = await postContact();
        console.log(data, 'post info');
        setFormData(data);
      } catch (error) {
        console.log(error);
      }
    };

    sendInfo();
  }, []);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.remarks) newErrors.remarks = "remarks is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await postContact(formData);
      Swal.fire({
        title: "Success!",
        text: "We will get back to you soon",
        icon: "success"
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        remarks: '',
      });
      console.log(response);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your request.",
        icon: "error"
      });
    }
  };

  return (
    <div className='reachUs'>
      {/* container 1 */}
      <div className='container'></div>
      {/* container 2 */}
      <div className="container reachUs_container">
        <div className="row">
          <h1>Reach Us</h1>
        </div>
        <div className="row-icons d-flex justify-content-around align-items-center">
          <div className="col-md-6">
            <p style={{ opacity: ".7" }}>
              We are eager to assist you in your new project and help you create something innovative and exceptional.
            </p>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.141531386434!2d76.34016546601282!3d10.087487359608875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f8d2a4d00a5%3A0xab8eb779d6643ade!2sMinute%20Designs!5e0!3m2!1sen!2sin!4v1725530379993!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '30px', padding: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form_group">
              <Container>
                <Row>
                  <Col md={12}>
                    <div>
                      <h2>Get in Touch</h2>
                      <p>You can reach us anytime</p>
                    </div>
                  </Col>
                </Row>
                <form className='form_value' onSubmit={onSubmit}>
                  <Row className="form_input">
                    <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Control
                          required
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={onChange}
                          className='input_box p-2'
                        />
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="validationCustom02">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={onChange}
                          className='input_box p-2'
                        />
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="form_email">
                    <Col md={12}>
                      <Form.Group controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend" className='input_box p-2'>
                            <Mail />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className='input_box p-2'
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="validationCustomPhone">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend" className='input_box p-2'>
                            <Phone />
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={onChange}
                            pattern="^\+?[0-9\s\-]{7,15}$"
                            className='input_box p-2'
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid phone number (e.g., +123 456-7890 or 123-456-7890).
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="validationCustomHelp">
                        <Form.Control
                          as="textarea"
                          rows={3}
                          required
                          placeholder="How can we help you?"
                          className='input_box p-3'
                          name="remarks"
                          value={formData.remarks}
                          onChange={onChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide details on how we can help.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <button type="submit" className='submit_btn p-2'>Submit</button>
                    </Col>
                  </Row>
                </form>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReachUs;