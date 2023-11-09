import React from "react";
import { useThemeStore } from "./theme";

export default function Content() {
  const { theme } = useThemeStore();
  return (
    <div className={`content ${theme === "light" ? "white" : "dark"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
