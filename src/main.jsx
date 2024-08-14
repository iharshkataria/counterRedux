import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux"; // Import Provider correctly

// Optional: Log state changes (useful for debugging)
store.subscribe(() => console.log(store.getState()));

// Render the application with StrictMode and Provider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Use Provider with correct capitalization */}
      <App />
    </Provider>
  </StrictMode>
);
