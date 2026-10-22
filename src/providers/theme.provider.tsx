import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { useThemeStore } from "@/store/theme.store";
import { lightTheme } from "@/theme/light";
import { darkTheme } from "@/theme/dark";


export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const themeMode = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}
