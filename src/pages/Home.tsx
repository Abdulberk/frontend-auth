import React from 'react'
import {Link } from 'react-router-dom';
import NavbarCom from '../components/NavbarCom';
import Login from './Login';


function Home() {
  return (

    
    <div>
<nav>
      <NavbarCom/>
      </nav>

   <Login/>

    
      </div>
  )
}

export default Home