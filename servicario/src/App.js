import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import initStore from "./store/index";
import ServiceApp from "ServiceApp";

import { onAuthStateChanged, storeAuthUser } from "./actions/index";

const store = initStore();

class App extends React.Component {
  componentDidMount() {
    this.unsubscribeAuth = onAuthStateChanged((authUser) => {
      console.log(authUser);
      store.dispatch(storeAuthUser(authUser));
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <Provider store={store}>
        <ToastProvider>
          <Router>
            <ServiceApp />
          </Router>
        </ToastProvider>
      </Provider>
    );
  }
}

export default App;
