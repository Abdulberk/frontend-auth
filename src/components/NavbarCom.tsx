import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function NavbarCom() {

  const auth = useSelector((state:any) => state.auth);
  const {user, isAuthenticated, token, userRoute} = auth;
  
  return (
    <div>
<Navbar style = {{backgroundColor: "#7FBCD2"}}>
      <Container>
        <Navbar.Brand href="/">Right&Above App</Navbar.Brand>
        <Navbar.Toggle />

        {isAuthenticated?

        <Navbar.Collapse className="justify-content-end">
          <Link to="/users/logout">Log out</Link>
          <Link to= {`/users/${user}/myfeeds`}> My Feeds</Link>
          <Link to="/users/profile">Profile</Link>
        </Navbar.Collapse>
        :
        <Navbar.Collapse className="justify-content-end">
          <Link to="/users/login">Log in</Link>
          <Link to="/users/about">About Us</Link>
        </Navbar.Collapse>
}
      </Container>
    </Navbar>


    </div>
  )
}

export default NavbarCom