import React, { useEffect } from 'react'
import { Outlet} from 'react-router-dom';

import {useState} from 'react';
import NavbarCom from '../components/NavbarCom';
import {useSelector} from 'react-redux';
import {useLocalStorage} from 'usehooks-ts';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function UserNotFound(): JSX.Element | null {
  return (
  <div><h1>404 User Not Found !</h1></div>
  )
}

function Profile() {

  interface Auth {
    auth: any;
   
  }

  const auth = useSelector((state:Auth) => state.auth);
  const {user, token} = auth;
  const location = useLocation();

  const locationSplit = location.pathname.split("/");
  const userId:String = locationSplit[2];

  if (userId !== user) {
    
    return (<div><UserNotFound/></div>)

  }

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