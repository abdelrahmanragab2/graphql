// main.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactQueryProvider from "./api/QueryClientProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>
);
