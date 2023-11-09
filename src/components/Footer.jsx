import React from "react";
import { useThemeStore } from "./theme";

export default function Footer() {
  const { theme, setTheme } = useThemeStore();
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <footer className={`footer ${theme === "light" ? "white" : "dark"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
