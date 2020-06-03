import React from "react";
import withAuthorization from "../../components/hoc/withAuthorization";
import ServiceItem from "../../components/service/ServiceItem";
import { fetchSentOffers, collaborate } from "actions";
import { connect } from "react-redux";
import { createMessage, createCollaboration } from "../../helpers/offers";
import { withToastManager } from "react-toast-notifications";

class SentOffers extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    this.props.dispatch(fetchSentOffers(auth.user.uid));
  }

  createCollaboration = (offer) => {
    const {
      auth: { user },
      toastManager,
    } = this.props;

    const collaboration = createCollaboration({ offer, fromUser: user });
    const message = createMessage({ offer, fromUser: user });

    this.props.collaborate({ collaboration, message }).then((_) =>
      toastManager.add("Collaboration Created Successfully!", {
        appearance: "success",
        autoDismiss: true,
      })
    );
  };

  render() {
    const { offers } = this.props;
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">Sent Offers</h1>
          <div className="columns">
            {offers.map((o) => (
              <div className="column is-one-third">
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={o.service}
                >
                  <div className="tag is-large">{o.status}</div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">To User:</span>{" "}
                      {o.toUser.fullName}
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
                  {o.status === "accepted" && !o.collaborationCreated && (
                    <div>
                      <hr />
                      <button
                        className="button is-success"
                        onClick={() => this.createCollaboration(o)}
                      >
                        Collaborate
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

const mapStateToProps = (state) => ({ offers: state.offers.sent });

const SentOffersWithToast = withToastManager(SentOffers);

export default withAuthorization(
  connect(mapStateToProps, { collaborate })(SentOffersWithToast)
);
