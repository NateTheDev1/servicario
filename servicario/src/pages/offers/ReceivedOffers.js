import React from "react";
import withAuthorization from "../../components/hoc/withAuthorization";
import ServiceItem from "../../components/service/ServiceItem";
import { fetchReceivedOffers, acceptOffer, declineOffer } from "actions";
import { connect } from "react-redux";

class ReceivedOffers extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    this.props.fetchReceivedOffers(auth.user.uid);
  }

  acceptOffer = (offerId) => {
    this.props.acceptOffer(offerId);
  };

  declineOffer = (offerId) => {
    this.props.declineOffer(offerId);
  };

  statusClass = (status) => {
    if (status === "pending") return "is-warning";
    if (status === "accepted") return "is-success";
    if (status === "declined") return "is-danger";
  };

  render() {
    const { offers } = this.props;
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">Received Offers</h1>
          <div className="columns">
            {offers.map((o) => (
              <div className="column is-one-third">
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={o.service}
                >
                  <div className={`tag is-large ${this.statusClass(o.status)}`}>
                    {o.status}
                  </div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">From User:</span>
                      {o.fromUser.fullName}
                    </div>
                    <div>
                      <span className="label">Note:</span> {o.note}
                    </div>
                    <div>
                      <span className="label">Price:</span> ${o.price}
                    </div>
                    <div>
                      <span className="label">Time:</span> {o.time} hours
                    </div>
                  </div>
                  {o.status === "pending" && (
                    <div>
                      <hr />
                      <button
                        className="button is-success s-m-r"
                        onClick={() => this.acceptOffer(o.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="button is-danger"
                        onClick={() => this.declineOffer(o.id)}
                      >
                        Deline
                      </button>
                    </div>
                  )}
                </ServiceItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ offers: state.offers.received });

const mapDispatchToProps = () => {
  return { acceptOffer, declineOffer, fetchReceivedOffers };
};

export default withAuthorization(
  connect(mapStateToProps, mapDispatchToProps())(ReceivedOffers)
);
