import React from "react";
import ReactDOM from "react-dom/client";
import StaticJobsProvider from "./context/StaticJobs";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StaticJobsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StaticJobsProvider>
  </React.StrictMode>
);
