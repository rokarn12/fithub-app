import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";

import { UserContext } from "./UserContext";

import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// components
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";

import AddItemPage from "./pages/AddItemPage";

import OutfitGenerator from "./pages/OutfitGenerator";
import ECloset from "./pages/ECloset";
import SavedOutfits from "./pages/SavedOutfits";


// functions
import { getUser } from "./api/user";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getUser().then((res) => {
      if (res.error) toast(res.error);
      else setUser(res.username);
    }).catch((err) => toast(err));

    return () => unsubscribe;
  }, []);

  return (
    <div>
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          {/*<ToastContainer /> this line does not throw error, but causes entire app to go blank*/}
          <Header />
          <redirect to={user ? '/' : 'login'} />
          <redirect to={user ? 'login' : 'userdashboard'} />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/signup" element={<Signup />}/>
            <Route exact path="/userdashboard" element={<UserDashboard />}/>
            <Route exact path="/additempage" element={<AddItemPage />}/>
            <Route exact path="/outfitgenerator" element={<OutfitGenerator />}/>
            <Route exact path="/ecloset" element={<ECloset />}/>
            <Route exact path="/savedoutfits" element={<SavedOutfits />}/>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
