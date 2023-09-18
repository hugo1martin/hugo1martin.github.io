import React, { useEffect, useState } from "react";

const ToggleDarkMode: React.FC = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Initialization: Try fetching from localStorage first, then system preference
  const initialDarkMode = () => {
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference !== null
      ? JSON.parse(storedPreference)
      : prefersDarkScheme.matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);

  useEffect(() => {
    const handleDarkSchemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    prefersDarkScheme.addEventListener("change", handleDarkSchemeChange);

    // Listen for changes in localStorage to keep state in sync across tabs
    window.addEventListener("storage", (event) => {
      if (event.key === "darkMode") {
        setIsDarkMode(JSON.parse(event.newValue || "false"));
      }
    });

    return () => {
      prefersDarkScheme.removeEventListener("change", handleDarkSchemeChange);
    };
  }, []);

  useEffect(() => {
    const classAction = isDarkMode ? "add" : "remove";
    document.body.classList[classAction]("dark");

    // Update the localStorage value whenever isDarkMode state changes
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={({ target }) => setIsDarkMode(target.checked)}
        checked={isDarkMode}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleDarkMode;
