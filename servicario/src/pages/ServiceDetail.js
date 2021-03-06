import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchServiceById } from "../actions/index";

import Spinner from "components/Spinner";

import OfferModal from "components/service/OfferModal";

const ServiceDetail = (props) => {
  const { serviceId } = useParams();
  const { dispatch, isFetching } = props;

  useEffect(() => {
    dispatch(fetchServiceById(serviceId));
  }, [dispatch, serviceId]);

  const { service, auth } = props;

  if (serviceId !== service.id) {
    return <Spinner />;
  }

  if (isFetching || serviceId !== service.id) {
    return <Spinner />;
  }

  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-4by3">
                <img src={service.image} alt="Description" />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">{service.title}</h1>
              <h2 className="subtitle is-4">{service.description}</h2>
              <br />
              <div className="has-text-centered">
                <OfferModal service={service} auth={auth} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hero-foot">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>
                <a>And this is the bottom</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    service: state.selectedService.item,
    isFetching: state.selectedService.isFetching,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ServiceDetail);
