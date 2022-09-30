import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom';


import { useLocalStorage } from  'usehooks-ts';

import {useState} from 'react';
import NavbarCom from '../components/NavbarCom';
import {useSelector} from 'react-redux';



function Profile() {

  const auth = useSelector((state:any) => state.auth);
  const {user, isAuthenticated, token} = auth;

    
useEffect(() => {
  
console.log(user, isAuthenticated, token)

    
}, [])
 

  return (
    <div>
      
 {token? 
 
 <section>

     <nav>
      <NavbarCom/>
      </nav>
        <h1>profile page: {token}</h1>
        <h2>username: {user}</h2>
        <h2>
        </h2>

        </section>

        : <h1>you are not logged in</h1>}
     
       <Outlet/>
        </div>
  )
}

export default Profile