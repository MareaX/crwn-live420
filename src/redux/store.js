import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
