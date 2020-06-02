import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routes from "Routes";
import { connect } from "react-redux";
import Spinner from "components/Spinner";
import { logout } from "./actions/index";

class ServiceApp extends React.Component {
  handleLogout = () => this.props.dispatch(logout());

  renderApplication = (auth) => {
    return (
      <React.Fragment>
        <Navbar auth={auth} logout={this.handleLogout} id="navbar-main" />
        <Navbar id="navbar-clone" auth={auth} logout={this.handleLogout} />
        <Sidebar />
        <Routes />
      </React.Fragment>
    );
  };

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ServiceApp);
