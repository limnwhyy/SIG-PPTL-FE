import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/ModalContext.tsx";
import App from "./App.tsx";
import React from "react";
import "./index.css";
import { MarkerProvider } from "./context/MarkerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <MarkerProvider>
        <App />
      </MarkerProvider>
    </ModalProvider>
  </React.StrictMode>
);
