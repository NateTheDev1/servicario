import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routes from "Routes";

class ServiceApp extends React.Component {
  renderApplication = () => {
    return (
      <React.Fragment>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Routes />
      </React.Fragment>
    );
  };

  render() {
    return this.renderApplication();
  }
}

export default ServiceApp;
