import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@styles/index.css";
import SplitProvider from "@provider/SplitProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SplitProvider>
      <App />
    </SplitProvider>
  </React.StrictMode>
);
