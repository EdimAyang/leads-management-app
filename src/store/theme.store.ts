import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "light" | "dark";

type ThemeStore = {
  theme: ThemeMode;

  toggleTheme: () => void;

  setTheme: (theme: ThemeMode) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      setTheme: (theme) =>
        set({
          theme,
        }),
    }),

    {
      name: "theme-storage",
    },
  ),
);
