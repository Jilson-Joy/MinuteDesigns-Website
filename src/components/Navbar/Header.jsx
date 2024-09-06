import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/MLOGO.png'
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, MonitorSmartphone  } from 'lucide-react';

import './Header.css'

function Header() {
    const location = useLocation();
    return (
        <Navbar expand="lg" className='nav_bg' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/" className='Nav-logo d-flex'>
                    <img
                        alt=""
                        src={Logo}
                        className="d-inline-block align-top"
                    />
                   <div className='logo_minute_text'> <h5 className='Logo-text'>Minute Designs</h5></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-left">
                        <Nav.Link
                            as={Link}
                            to="/about"
                            active={location.pathname === '/about'}
                            className='pe-4'
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/work"
                            active={location.pathname === '/work'}
                            className='pe-4'
                        >
                            Work
                        </Nav.Link>
                        <NavDropdown
                            title="Services"
                            id="basic-nav-dropdown"
                            className='pe-4'
                        >
                            <NavDropdown.Item href="#action/3.1"><MonitorSmartphone />Web Application</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><Smartphone/>Mobile Application</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">E-commerce</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">UI/UX</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            as={Link}
                            to="/careers"
                            active={location.pathname === '/careers'}
                            className='pe-4'
                        >
                            Careers
                        </Nav.Link>
                        <Link to={'/reachUs'}>
                            <button
                                className='btnReachUs'><span>Reach Us</span></button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;