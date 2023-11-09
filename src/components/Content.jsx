import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../recoil/theme/atom";

export default function Content() {
  const [theme] = useRecoilState(themeState);
  return (
    <div className={`header ${theme === "light" ? "white" : "dark"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
