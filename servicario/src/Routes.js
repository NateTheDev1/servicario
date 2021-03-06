import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Faq from "./pages/Faq";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ServiceDetail from "pages/ServiceDetail";
import Secret from "pages/Secret";
import ServiceCreate from "pages/services/ServiceCreate";
import UserServices from "pages/services/UserServices";
import SentOffers from "pages/offers/SentOffers";
import ReceivedOffers from "pages/offers/ReceivedOffers";

const Routes = () => (
  <Switch>
    <Route path="/secret">
      <Secret />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/offers/sent">
      <SentOffers />
    </Route>
    <Route path="/offers/received">
      <ReceivedOffers />
    </Route>
    <Route path="/services/me">
      <UserServices />
    </Route>
    <Route path="/services/new">
      <ServiceCreate />
    </Route>
    <Route path="/services/:serviceId">
      <ServiceDetail />
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
);

export default Routes;
