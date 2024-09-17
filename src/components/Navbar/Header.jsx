import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/images/MinuteLogo.png";
import { Link, useLocation } from "react-router-dom";
import { Smartphone, MonitorSmartphone, Menu, X } from "lucide-react";
import headerIcons from "../../assets/images/about-img.png";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <Navbar expand="lg" className="nav_bg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="Nav-logo d-flex">
          <img alt="" src={Logo} className="d-inline-block align-top" />
          {/* <div className='logo_minute_text'> <h5 className='Logo-text'>Minute Designs</h5></div> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
          style={{ color: "white" }}
        >
          {isNavOpen ? <X /> : <Menu />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-left">
            <Nav.Link
              as={Link}
              to="/about"
              active={location.pathname === "/about"}
              className="pe-4"
            >
              About
            </Nav.Link>
            {/* <Nav.Link
                            as={Link}
                            to="/work"
                            active={location.pathname === '/work'}
                            className='pe-4'
                        >
                            Work
                        </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/gallery"
              active={location.pathname === "/gallery"}
              className="pe-4"
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              active={location.pathname === "/portfolio"}
              className="pe-4"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              active={location.pathname === "/blog"}
              className="pe-4"
            >
              Blog
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to="/service"
              active={location.pathname === "/service"}
              className="pe-4"
            >
              services
            </Nav.Link> */}
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="pe-4"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              show={showDropdown} // Control visibility here
            >
              <NavDropdown.Item as={Link} to="/webapp">
                <img src={headerIcons} alt="" className="headerIconImg" /> Web
                Application
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobileApp">
                <Smartphone /> Mobile Application
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/e-commerce">
                E-commerce
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/uiux">
                UI/UX
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link
                            as={Link}
                            to="/careers"
                            active={location.pathname === '/careers'}
                            className='pe-4'
                        >
                            Careers
                        </Nav.Link> */}

            <Link to={"/reachUs"}>
              <button className="btnReachUs">
                <span>Reach Us</span>
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
