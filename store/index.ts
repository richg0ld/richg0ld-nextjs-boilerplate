import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer, { rootSaga } from "../modules";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = initialState => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([logger, sagaMiddleware])
  );

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
