import { useAppearanceStore } from "@/stores/appearanceStore";
import { ReactNode } from "react";
import ToggleIconButton from "../ToggleIconButton";

type ThemeToggleProps = {
  className?: string;
  title?: string;
  lightThemeIcon: ReactNode;
  darkThemeIcon: ReactNode;
};

const ThemeToggle = (props: ThemeToggleProps) => {
  const { className, title, lightThemeIcon, darkThemeIcon } = props;

  const theme = useAppearanceStore((state) => state.theme);
  const toggleTheme = useAppearanceStore((state) => state.toggleTheme);

  const isDarkTheme = theme === "dark";

  return (
    <ToggleIconButton
      className={className ?? ""}
      onClick={toggleTheme}
      title={title}
      aria-label={`Переключить на ${theme === "dark" ? "светлую" : "темную"} тему`}
      icon={isDarkTheme ? lightThemeIcon : darkThemeIcon}
    />
  );
};

export default ThemeToggle;
