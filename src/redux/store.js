import { createStore, compose } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(rootReducer, composeEnhancers());

const persistor = persistStore(store);

export { store, persistor };
