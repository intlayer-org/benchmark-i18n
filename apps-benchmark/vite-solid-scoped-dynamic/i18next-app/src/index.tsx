/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App.tsx";
import "./styles.css";

if (typeof window !== "undefined") {
  if (window.location.pathname === "/" || window.location.pathname === "") {
    window.history.replaceState(null, "", "/en");
  }
}

const root = document.getElementById("root");

render(() => <App />, root!);
