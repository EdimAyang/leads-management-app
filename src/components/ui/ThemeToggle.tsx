import { Moon, Sun } from "lucide-react";
import Button from "@/components/ui/Button";
import { useThemeStore } from "@/store/theme.store";

export default function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);

  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <Button
      variant="ghost"
      size="sm"
      leftIcon={theme === "light" ? <Moon /> : <Sun />}
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark" : "Light"}
    </Button>
  );
}
