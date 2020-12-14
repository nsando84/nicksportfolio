import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/logo1.png'

const NavbarMain = () => {
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
                        className="mx-4"
                        onClick={() => {
                            console.log('hi')
                        }}
                        >
                        <span className="text-danger">{leftBracket}</span> Home <span className="text-danger">{rightBracket}</span>
                        </Nav.Link>

                    <Nav.Link 
                        style={brandStyle} 
                        eventKey="link-1" 
                        className="mx-4"
                    
                    >Projects</Nav.Link>


                    <Nav.Link 
                        style={brandStyle} 
                        eventKey="link-2" 
                        className="mx-4"
                        
                        >
                        Contact</Nav.Link>
      
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

const leftBracket = `{  `

const rightBracket = `  }`