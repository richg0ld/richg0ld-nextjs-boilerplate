import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer, { rootSaga } from "../modules";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(logger, ...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
