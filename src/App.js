import { AppContext } from "context/AppContext";
import Pages from "./pages";
import "./styles/global.scss";
import { useEffect, useState } from "react";
import "./styles/colors.css";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const contextValues = {
    theme,
    setTheme,
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <AppContext.Provider value={contextValues}>
      <div>
        <Pages />
      </div>
    </AppContext.Provider>
  );
}

export default App;
