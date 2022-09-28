import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarCom() {
  return (
    <div>
<Navbar style = {{backgroundColor: "#7FBCD2"}}>
      <Container>
        <Navbar.Brand href="#home">Right&Above App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="#login">Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default NavbarCom