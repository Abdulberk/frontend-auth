import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom';

import {useLocation} from 'react-router-dom';
import { useLocalStorage } from  'usehooks-ts';

import {useState} from 'react';
import NavbarCom from '../components/NavbarCom';

function Profile() {
    
const location = useLocation();

const userData = location.state.currentUser;
const token:String = location.state.auth;

const [auth, setAuth] = useLocalStorage("auth", token);


useEffect(() => {
console.log(auth)

}, [])

useEffect(() => {

    setAuth(prev => {

        return {...prev, auth: token}
        
        }
        
      )
      console.log(auth)

}, [])
 

  return (
    <div>
      
 {auth? 
 
 <section>

     <nav>
      <NavbarCom/>
      </nav>
        <h1>profile page</h1>
        <h2>username: {userData.username}</h2>
        <h2>
         
        </h2>

        </section>

        : <h1>you are not logged in</h1>}
     
       <Outlet/>
        </div>
  )
}

export default Profile