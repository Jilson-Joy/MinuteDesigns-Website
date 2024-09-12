import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Login.css';
import Auth from '../../assets/images/Authentication.gif';
import Logo from '../../assets/images/minute.jpg'

function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div className='container'>
            <div className='login_container'>
                <div className='login_section row d-flex justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='login_img'>
                            <img src={Auth} alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='login_form'>
                            {/* <div className='login_logo'>
                                <img src={Logo} alt="" />
                            </div> */}
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustomPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a password.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <button type="submit" className='login_button'>Submit</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
