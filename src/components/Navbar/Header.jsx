import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/MinuteLogo.png'
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, MonitorSmartphone } from 'lucide-react';
import headerIcons from '../../assets/images/about-img.png'
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
                   {/* <div className='logo_minute_text'> <h5 className='Logo-text'>Minute Designs</h5></div> */}
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
                        <Nav.Link
                            as={Link}
                            to="/gallery"
                            active={location.pathname === '/gallery'}
                            className='pe-4'
                        >
                           Gallery
                        </Nav.Link>
                        <NavDropdown
                            title="Services"
                            id="basic-nav-dropdown"
                            className='pe-4 '
                        >
                            <NavDropdown.Item as={Link} to="/webapp"><img src={headerIcons} alt="" className='headerIconImg' /> Web Application</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/mobileApp"><Smartphone />Mobile Application</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/e-commerce">E-commerce</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/uiux">UI/UX</NavDropdown.Item>

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
                                className='btnReachUs'><span>Reach Us</span>
                            </button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;