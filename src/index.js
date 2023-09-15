import React from "react";
import { createRoot } from "react-dom/client"; 

import App from "./components/App";
import { AppContextProvider } from "./providers/context";

const root = createRoot(document.getElementById("root")); 

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
