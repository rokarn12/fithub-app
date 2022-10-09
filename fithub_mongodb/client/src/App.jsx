import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
      </Routes>
    </Router>
  );
};

export default App;
