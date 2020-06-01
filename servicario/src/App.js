import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Faq from "./pages/Faq";

import Navbar from "./components/Navbar";

import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
