import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import { router } from "./router/routes";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/Globalstyles";
import { QueryProvider } from "./providers/query";
import AppThemeProvider from "./providers/theme.provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppThemeProvider>
        <QueryProvider>
          <GlobalStyle />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
            }}
          />
          <RouterProvider router={router} />
        </QueryProvider>
      </AppThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
