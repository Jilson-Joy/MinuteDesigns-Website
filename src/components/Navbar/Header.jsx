import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/minute.jpg'
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

function Header() {
    const location = useLocation();
    return (
        <Navbar expand="lg" className='nav_bg'>
            <Container>
                <Navbar.Brand as={Link} to="/" >
                    <img
                        alt=""
                        src={Logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Minute designs
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
                            title="Technologies"
                            id="basic-nav-dropdown"
                            className='pe-4'
                        >
                            <NavDropdown.Item href="#action/3.1">Technologies</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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