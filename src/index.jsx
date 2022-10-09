import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { useEffect } from "react";

import "./index.css";
import App from "./App";
import { store } from "./redux/store";

const ScrollToTop = () => {
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
