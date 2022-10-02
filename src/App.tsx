import React from 'react';
import './App.css';
import Login from './pages/Login';
import NavbarCom from './components/NavbarCom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Feeds from './components/MyFeeds';
import {useDispatch} from 'react-redux';
import { logout } from './redux/authSlice';
import {ReactNode} from 'react';
import Logout from './components/Logout';



function App() {
  const dispatch = useDispatch();
  type Props = {
    children : React.ReactNode;
    };
  return (
    <div>

 
      <Router>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="users/:id" element={<Profile/>} />
        <Route path="users/:id/myfeeds" element={<Feeds/>}/>
        <Route path = "users/logout" element={<Logout/>}/>
          
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>

      </Router>
    
      
    </div>
  );
}

export default App;
