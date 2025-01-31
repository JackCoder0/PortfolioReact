import { useEffect, useState } from "react";
import { ToggleSwitch } from "./styles";
import { ToggleThemeType } from "../../layouts/DefaultLayout/types";

interface SwitchThemeProps {
  toggleTheme: ToggleThemeType;
}

export function SwitchTheme({ toggleTheme }: SwitchThemeProps) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode");
    if (storedTheme === "dark") {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, []);

  const onToggle = () => {
    setIsToggled((prevState) => !prevState);
    toggleTheme();
  };

  return (
    <ToggleSwitch>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span />
    </ToggleSwitch>
  )
}