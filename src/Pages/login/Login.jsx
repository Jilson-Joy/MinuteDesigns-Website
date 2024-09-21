import { useState, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Login.css';
import Auth from '../../assets/images/Authentication.gif';
import { useDispatch, useSelector,Provider  } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const { loading, error, currentUser } = useSelector((state) => state.admin);

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
        setValidated(true);
        dispatch(loginUser({ email, password }));
    };

    useEffect(() => {
        console.log("currentUser",currentUser)
        if (currentUser) {
            navigate('/mainDashboard'); 
        }
    }, [currentUser, navigate]);

    

    return (
        <div className="container">
            <div className="login_container">
                <div className="login_section row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="login_img">
                            <img src={Auth} alt="Authentication" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login_form">
                            <Form noValidate validated={validated} onSubmit={handleLogin}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a password.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {currentUser && validated && !error && (
                                    <Alert variant="success">Login successful!</Alert>
                                )}
                                {error && validated && (
                                    <Alert variant="danger">Login failed. Please check your email or password.</Alert>
                                )}

                                <Button type="submit" className="login_button" disabled={loading}>
                                    {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
