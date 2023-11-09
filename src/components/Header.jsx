import React from "react";
import { useThemeStore } from "./theme";

export default function Header() {
  const { theme } = useThemeStore();
  return (
    <header className={`header ${theme === "light" ? "white" : "dark"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
