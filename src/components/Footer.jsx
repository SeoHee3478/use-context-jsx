import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../jotai/atom";

export default function Footer() {
  const [theme, setTheme] = useAtom(themeAtom);

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
