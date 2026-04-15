import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

if (
  typeof performance !== "undefined" &&
  typeof performance.mark === "function"
) {
  performance.mark("hydration_start");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
