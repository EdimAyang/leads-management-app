import type { DefaultTheme } from "styled-components";
import { baseTheme } from "./base";

export const lightTheme: DefaultTheme = {
  ...baseTheme,

  mode: "light",

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
};
