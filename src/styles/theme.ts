import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  mode: "dark",
  layout: {
    sidebar: {
      expanded: "260px",
      collapsed: "80px",
    },
    header: {
      height: "70px",
    },
  },
  colors: {
    primary: "#2563EB",
    secondary: "#3B82F6",

    success: "#16A34A",
    warning: "#F59E0B",
    danger: "#DC2626",

    background: "#F8FAFC",
    surface: "#FFFFFF",

    border: "#E2E8F0",

    text: "#0F172A",
    textLight: "#64748B",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,.1)",
    md: "0 5px 15px rgba(0,0,0,.08)",
  },
};
