import { createStore } from "redux";
import serviceApp from "../reducers/index";

const addLoggerToDispatch = (store) => {
  return (dispatch) => {
    return (action) => {
      console.group(action.type);
      console.log("%c prev state", "color: gray", store.getState());
      console.log("%c action", "color: blue", action);
      const returnValue = dispatch(action);
      console.log("%c next state", "color: green", store.getState());
      console.groupEnd(action.type);
      return returnValue;
    };
  };
};

const addPromiseToDispatch = (store) => {
  return (dispatch) => {
    return (action) => {
      if (typeof action.then === "function") {
        return action.then(dispatch);
      }
      return dispatch(action);
    };
  };
};

const applyMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    .forEach((middleware) => {
      store.dispatch = middleware(store)(store.dispatch);
    });
};

const initStore = () => {
  const middlewares = [addPromiseToDispatch];

  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(serviceApp, browserSupport);

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(addLoggerToDispatch);
  }
  applyMiddlewares(store, middlewares);

  return store;
};

export default initStore;
