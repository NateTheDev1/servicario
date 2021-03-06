import React from "react";
import withAuthorization from "components/hoc/withAuthorization";
import { fetchUserServices } from "../../actions/index";

import ServiceItem from "components/service/ServiceItem";

class UserServices extends React.Component {
  componentDidMount() {
    const {
      auth: { user },
      dispatch,
    } = this.props;
    debugger;
    dispatch(fetchUserServices(user.uid));
  }

  render() {
    const { services } = this.props.auth.user;
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">
            Welcome {this.props.auth.user.fullName}, these are your services.
          </h1>
          <hr />
          <div className="columns is-multiline">
            {services.map((s) => (
              <div key={s.id} className="column">
                <ServiceItem service={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthorization(UserServices);
