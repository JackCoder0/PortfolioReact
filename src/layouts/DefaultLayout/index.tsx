import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { ToggleThemeType } from "./types";

export function DefaultLayout({ toggleTheme }: { toggleTheme: ToggleThemeType }) {
  return (
    <LayoutContainer>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
    </LayoutContainer>
  );
}