import { useCallback, useMemo, useState } from "react";
import { Folio } from "./components/Folio/Folio";
import classes from "./App.module.scss";
import { useMount } from "./hooks/useMount";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { DEFAULT_THEME, ENABLE_THEME_TOGGLE } from "./configs/app.config";
function App() {
  const [theme, setTheme] = useState(
    ENABLE_THEME_TOGGLE
      ? localStorage.getItem("theme") ?? DEFAULT_THEME
      : DEFAULT_THEME
  );
  const themeColors: Record<string, string> = useMemo(
    () => ({
      "#222": "theme-default",
      "#fff": "theme-light",
      "#02203c": "theme-blue",
    }),
    []
  );
  const keys = useMemo(() => Object.keys(themeColors), [themeColors]);
  useMount(() => {
    document.body.classList.add(theme);
  });

  const changeTheme = useCallback(
    (color: string) => {
      document.body.classList.replace(theme, themeColors[color]);
      setTheme(themeColors[color]);
      localStorage.setItem("theme", themeColors[color]);
    },
    [themeColors, theme]
  );
  const themeJsx = ENABLE_THEME_TOGGLE ? (
    <div className={classes.themeSelector}>
      {keys.map((color) => (
        <div
          className={`${classes.themeBlock} ${
            themeColors[color] === theme ? classes.active : ""
          }`}
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => changeTheme(color)}
        ></div>
      ))}
    </div>
  ) : null;
  return (
    <div className="container">
      <Toolbar />
      <Folio />
      {themeJsx}
    </div>
  );
}

export default App;
