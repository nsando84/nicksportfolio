import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/logo1.png'

const NavbarMain = () => {

    const usePathname = () => {
        const location = useLocation();
        return location.pathname
    }
    const pathLocation = usePathname()

    return (
        <Navbar expand="sm" style={navBarStyle} className="navbar-expand d-flex flex-wrap">
           
            <Navbar.Brand href="#home" className="d-inline-flex">
                <Link to="/" style={{textDecoration: 'none', color: 'unset'}}>
                    <div className="mr-2"><img alt="logo" src={Logo} style={logoStyle}/></div>
                    <div>
                    <div style={brandStyle}>N. Sandoval</div>
                    <div style={brandStyleSmall}>Full Stack Developer</div>
                    </div>
                </Link>
            </Navbar.Brand>
                <Nav className="ml-auto h-100" activeKey="link-0">
                 
                    <Nav.Link 
                        style={brandStyle}
                        eventKey="link-0" 
                        className={pathLocation !== '/contact' &&  pathLocation !== '/projects' ? 'border-bottom border-danger mx-4' : 'mx-4'}
                        as={Link}
                        to="/home"
                        >
                        Home
                        </Nav.Link>

                    <Nav.Link 
                        style={brandStyle} 
                        eventKey="link-1" 
                        className={pathLocation === '/projects' ? 'border-bottom border-danger mx-4' : 'mx-4'}
                        as={Link}
                        to="/projects"  
                        >
                        Projects      
                        </Nav.Link>


                    <Nav.Link 
                        style={brandStyle} 
                        eventKey="link-2" 
                        className={pathLocation === '/contact' ? 'border-bottom border-danger mx-4' : 'mx-4'}
                        as={Link}
                        to="/contact"
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
