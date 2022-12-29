import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import reportWebVitals from "./reportWebVitals";
// import { Suspense } from "react";
// import Loader from "./components/Loader";
import App from "./App" 
// const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Suspense fallback={<Loader />}> */}
      <App />
    {/* </Suspense> */}
  </React.StrictMode>
);

reportWebVitals();
