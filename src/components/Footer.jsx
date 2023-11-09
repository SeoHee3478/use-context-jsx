import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../recoil/theme/atom";

export default function Footer() {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <footer className={`header ${theme === "light" ? "white" : "dark"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
