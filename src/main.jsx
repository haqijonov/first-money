import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18.js";
import ContactModal from "./components/ContactModal.jsx";
import ConnectionFixed from "./components/ConnectionFixed.jsx";
// Handle modal
document.body.onkeydown = (e) => {
  if (e.code === "Escape") {
    contactModal.classList.toggle("show");
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ConnectionFixed />
    <App />
    <ContactModal />
  </>,
);
