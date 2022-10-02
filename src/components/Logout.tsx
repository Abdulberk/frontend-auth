import React from 'react'
import {Link } from 'react-router-dom';
import NavbarCom from '../components/NavbarCom';
import {useDispatch} from 'react-redux';
import { logout } from '../redux/authSlice.js'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


interface Auth  {
        auth: any;
    }

const Logout = () => {
    const dispatch = useDispatch();
    

    const auth = useSelector((state:Auth) => state.auth);
    const {user, token, isAuthenticated} = auth;
    

    useEffect(() => {



        dispatch(logout( 
            {
                user: null,
                token: null,
                isAuthenticated: false}
        ))

    
    }, [])

    return (
        <div>
        
        
        {!isAuthenticated && <div>
         
        <nav>
        <NavbarCom/>
        </nav>
        <h1>you have been logged out</h1>
        <Link to="/">Go back to the homepage</Link>
        </div>
}


        </div>
        
    )
    }   

    export default Logout