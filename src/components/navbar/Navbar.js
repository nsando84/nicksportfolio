import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/logo1.png'

const NavbarMain = () => {
    const [ navState , setNavState ] = useState(1)

    console.log('hih')
    return (
        <Navbar expand="sm" style={navBarStyle} className="navbar-expand d-flex flex-wrap">
           
            <Navbar.Brand href="#home" className="d-inline-flex">
                <div className="mr-2"><img alt="logo" src={Logo} style={logoStyle}/></div>
                <div>
                <div style={brandStyle}>N. Sandoval</div>
                <div style={brandStyleSmall}>Full Stack Developer</div>
                </div>
            </Navbar.Brand>
                <Nav className="ml-auto h-100" activeKey="link-0">
                 
                    <Nav.Link 
                        style={brandStyle}
                        eventKey="link-0" 
                        className={navState === 1 ? 'border-bottom border-danger mx-4' : 'mx-4'}
                        as={Link}
                        to="/home"
                        onClick={() => {
                            setNavState(1)
                            console.log('1')
                        }}
                        >
                        Home
                        </Nav.Link>

                    <Nav.Link 
                        style={brandStyle} 
                        eventKey="link-1" 
                        className={navState === 2 ? 'border-bottom border-danger mx-4' : 'mx-4'}
                        as={Link}
                        to="/projects"
                        onClick={() => {
                            setNavState(2)
                            console.log('2')
                        }}      
                        >
                        Projects      
                        </Nav.Link>


                    <Nav.Link 
                        style={brandStyle} 
                        eventKey="link-2" 
                        className={navState === 3 ? 'border-bottom border-danger mx-4' : 'mx-4'}
                        as={Link}
                        to="/contact"
                        onClick={() => {
                            setNavState(3)
                            console.log('3')
                        }}
                        >   
                        Contact
                        </Nav.Link>
      
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
    fontSize: '23px',
}

const brandStyleSmall = {
    color: 'white',
    fontSize: '15px'
}

const logoStyle = {
    height: '60px'
}
