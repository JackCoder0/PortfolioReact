import { useState } from "react";
import { ToggleSwitch } from "./styles";
import { ToggleThemeType } from "../../layouts/DefaultLayout/types";

interface SwitchThemeProps {
  toggleTheme: ToggleThemeType;
}

export function SwitchTheme({ toggleTheme }: SwitchThemeProps) {
  const [isToggled, setIsToggled] = useState(false);

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