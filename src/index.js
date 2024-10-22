import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PageProvider } from "./contexts/PageContext";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PageProvider>
    </Provider>
  </React.StrictMode>
);
