import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBarContextProvider from "./Context/NavBarContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavBarContextProvider>
        <App />
      </NavBarContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
