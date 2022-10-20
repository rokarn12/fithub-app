import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserContext } from "./UserContext";

import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// components
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          {/* <ToastContainer /> */}
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/signup" element={<Signup />}/>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
