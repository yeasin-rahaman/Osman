
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <Container>
                    <Nav.Link as={NavLink} to="/dashboard"><Navbar.Brand className="logo">Dashboard</Navbar.Brand></Nav.Link>
                    {/* <Nav.Link as={NavLink} to="/home"><Navbar.Brand href="#home"> <img src={logo} className="w-50" alt="" /></Navbar.Brand></Nav.Link> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>


                            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    );
};

export default Header;