import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    theme === "light"
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  }, [theme]);
  return {
    theme,
    setTheme,
  };
};

export default useTheme;
