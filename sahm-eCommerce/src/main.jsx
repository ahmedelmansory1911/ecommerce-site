import React from "react";
import ReactDOM from "react-dom/client";
import './i18n.js';
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { WorkoutsContextProvider } from "./context/WorkoutContext.jsx";
import { Provider } from "react-redux"; // Import Provider
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { store, persistor } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap with Provider */}
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        {/* Wrap with PersistGate */}
        <AuthContextProvider>
          <WorkoutsContextProvider>
            <BrowserRouter>
              <App />
              <ToastContainer />
            </BrowserRouter>
          </WorkoutsContextProvider>
        </AuthContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
