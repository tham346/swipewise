import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from './components/Profile';
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}