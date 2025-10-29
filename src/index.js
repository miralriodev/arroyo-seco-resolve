import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Render de React con Router
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Service Worker: solo registrar en producción para evitar bucles de reload en dev
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    if (process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then(reg => console.log("✅ SW registrado (prod):", reg))
        .catch(err => console.log("❌ Error registrando SW:", err));
    } else {
      // Asegurar que en desarrollo no quede ningún SW/caché previo
      navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister()));
      if (window.caches) {
        caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
      }
      console.log("ℹ️ Service Worker desactivado en desarrollo y cachés limpiados");
    }
  });
}
