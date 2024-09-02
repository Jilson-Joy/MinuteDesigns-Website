import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/minute.jpg'
import Button from 'react-bootstrap/Button';
// import '../../assets/css/commonStyle.css'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
               <Link to={"/"} className='logo'>
                    <Navbar.Brand href="#home" >
                        <img
                            alt=""
                            src={Logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Minute designs
                    </Navbar.Brand>
               </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-left">
                        <Nav.Link href="#home" className='pe-4'>About</Nav.Link>
                        <Nav.Link href="#link" className='pe-4'>Work</Nav.Link>
                        <NavDropdown title="Technologies" id="basic-nav-dropdown" className='pe-4'>
                            <NavDropdown.Item href="#action/3.1">Technologies</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#link" className='pe-4'>Careers</Nav.Link>
                        <button className='btnReachUs' >Reach Us</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;