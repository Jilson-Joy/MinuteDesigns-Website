import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Auth from '../../assets/images/Authentication.gif';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/admin/Login.css";

function Login() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, currentMinuteWebUser } = useSelector((state) => state.admin);

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
        if (currentMinuteWebUser) {
            navigate('/mainDashboard');
        }
    }, [currentMinuteWebUser, navigate]);

    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="login-section">
                <div className="text-center mb-4">
                    <img src={Auth} alt="Authentication" className="login-img" />
                    <h2 className="login-title">Admin Login</h2>
                </div>
                <Form noValidate validated={validated} onSubmit={handleLogin}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-input"
                            />
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustomPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                            />
                            <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    {validated && currentMinuteWebUser && !error && (
                        <Alert variant="success">Login successful!</Alert>
                    )}
                    {error && validated && (
                        <Alert variant="danger">Login failed. Please check your email or password.</Alert>
                    )}

                    <Button type="submit" className="login-button" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Log In'}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
