import { HeaderContainer } from "./styles";
import logoHeader from "../../assets/Logo.svg";
import { SwitchTheme } from "../SwitchTheme/index";
import { Github, Instagram, Linkedin } from 'lucide-react';
import { ToggleThemeType } from "../../layouts/DefaultLayout/types";

interface HeaderProps {
  toggleTheme: ToggleThemeType;
}

export function Header({ toggleTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <img src={logoHeader} alt="" />

      <nav>
        <a href="#">
          <Github size="20" />
          <span>
            Github
          </span>
        </a>
        <a href="#">
          <Instagram size="20" />
          <span>
            Instagram
          </span>
        </a>
        <a href="#">
          <Linkedin size="20" />
          <span>
            Linkedin
          </span>
        </a>
      </nav>

      <SwitchTheme toggleTheme={toggleTheme} />
    </HeaderContainer>
  )
}