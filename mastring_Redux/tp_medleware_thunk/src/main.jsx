import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; 
import reducer from "./reducers/reducerFruit";
import App from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import reducer from "./reducers/reducerFruit";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import App from "./App2";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(reducer, applyMiddleware(thunk));
// root.render(
//   <Provider store={store}>
//     <>
//       <App />
//     </>
//   </Provider>
// );
