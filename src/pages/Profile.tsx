import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom';

import {useLocation} from 'react-router-dom';

import {useState} from 'react';
import {useLocalStorage} from '@mantine/hooks'
import NavbarCom from '../components/NavbarCom';

function Profile() {
    
const location = useLocation();

const username:String = location.state.currentUser.username


  return (
    
    <div style = {{color: "red", display:"flex",flexDirection:"column",justifyContent:"center",
    alignItems:"center",
    }}>
     
        <h1>profile page</h1>
        <h2>username: {username}</h2>
        <h2>
         
        </h2>
       <Outlet/>
        </div>
  )
}

export default Profile