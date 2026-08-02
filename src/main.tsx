import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

import { router } from "./router/routes";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/Globalstyles";
import { QueryProvider } from "./providers/query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <GlobalStyle />

        <RouterProvider router={router} />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
