import { useEffect, useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { useThemeStore } from "./components/theme";

function App() {
  const { setTheme, theme } = useThemeStore();
  useEffect(() => {
    theme && setTheme(theme);
  }, []);

  return <Page />;
}

export default App;
