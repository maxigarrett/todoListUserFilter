import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "todomvc-app-css/index.css"; //este index es de npm que instalamos no del index que trae por defecto react

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
