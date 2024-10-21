import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PageProvider } from "./contexts/PageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageProvider>
  </React.StrictMode>
);
