import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark room lighting" : "Switch to light room lighting"}
    >
      <span className="relative inline-flex size-4 items-center justify-center">
        <Sun
          className={`absolute size-4 transition-[opacity,transform,filter] duration-300 ${isLight ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"}`}
        />
        <Moon
          className={`absolute size-4 transition-[opacity,transform,filter] duration-300 ${isLight ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"}`}
        />
      </span>
    </Button>
  );
}
