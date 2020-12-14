import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/logo1.png'

const NavbarMain = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={navBarStyle} className="navbarstyle">
            <Navbar.Brand href="#home" className="d-inline-flex">
                <div className="mr-2"><img alt="logo" src={Logo} style={logoStyle}/></div>
                <div>
                <div style={brandStyle}>N. Sandoval</div>
                <div style={brandStyleSmall}>Full Stack Developer</div>
                </div>
            </Navbar.Brand>
                <Nav className="ml-auto h-100">
                    <div className="d-flex">
                    <Nav.Link style={brandStyle}>Home</Nav.Link>
                    <Nav.Link style={brandStyle}>Projects</Nav.Link>
                    <Nav.Link style={brandStyle}>Contact</Nav.Link>
                    </div>
                </Nav>
        </Navbar>
    )

}

export default NavbarMain

const navBarStyle = {
    height: '100px',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'rgba(0,0,0,0.0)',
  
};

const brandStyle = {
    color: 'white',
    fontSize: '27px',
}

const brandStyleSmall = {
    color: 'white',
    fontSize: '15px'
}

const logoStyle = {
    height: '60px'
}