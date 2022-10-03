import React from "react";
import "./App.css";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feeds from "./components/MyFeeds";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element = {<ProtectedRoutes/>}>
            
            <Route path = "users">
               <Route path=":id/myfeeds" element={<Feeds />} />
               <Route path=":id/profile" element={<Profile />} />

            <Route path="logout" element={<Logout />} />
            
          </Route>

          </Route>

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
