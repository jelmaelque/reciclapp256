import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

// registra service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
