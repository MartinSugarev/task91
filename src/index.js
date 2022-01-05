import "./scss/app.scss";
import Application from "./js/Application";
import Beat from "./js/Beat";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  const app2 = new Beat();
  // Used to access the app instance by the automated tests
  window.__JS_APP = app;
  
  window.__JS_APP = app2;
});
