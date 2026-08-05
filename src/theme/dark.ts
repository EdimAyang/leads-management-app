import type { DefaultTheme } from "styled-components";
import { baseTheme } from "./base";

export const darkTheme: DefaultTheme = {
  ...baseTheme,

  mode: "dark",

  colors: {
    primary: "#60A5FA",
    secondary: "#93C5FD",

    success: "#22C55E",
    warning: "#FBBF24",
    danger: "#F87171",

    background: "#020617",
    surface: "#0F172A",

    border: "#1E293B",

    text: "#F8FAFC",
    textLight: "#94A3B8",
  },
};
