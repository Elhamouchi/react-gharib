
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reducerFruit from "./reducers/reducerFruit";
import { createStore, applyMiddleware } from "redux";
import logger from "./middleware/logger";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducerFruit, applyMiddleware(logger));
root.render(
  <Provider store={store}>
    <>
      <App />
    </>
  </Provider>
);
