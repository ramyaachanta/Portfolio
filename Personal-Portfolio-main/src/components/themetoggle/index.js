import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const themetoggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event("themechange"));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event("themechange"));
  }, [theme]);

  return (
      <div className="nav_ac" onClick={themetoggle}>
        <WiMoonAltWaningCrescent4 />
      </div>
  );
};

export default Themetoggle;
