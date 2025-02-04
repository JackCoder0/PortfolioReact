import {
  CircleUser,
  CodeXml,
  FileCode,
  GraduationCap,
  LayoutGrid,
  Mail,
  Monitor
} from "lucide-react";

import { NavBarContainer } from "./styles";

const iconsWithNames = [
  { icon: LayoutGrid, name: "Home", href: "#Home" },
  { icon: CircleUser, name: "Sobre Mim", href: "#aboutMe" },
  { icon: GraduationCap, name: "Educação", href: "#Education" },
  { icon: Monitor, name: "Experiências", href: "#Experience" },
  { icon: CodeXml, name: "Habilidades", href: "#Skills" },
  { icon: FileCode, name: "Projetos", href: "#Projects" },
  { icon: Mail, name: "Contato", href: "#Contact" },
];


export function Navbar() {
  return (
    <NavBarContainer>
      {iconsWithNames.map(({ icon: IconComponent, name, href }) => (
        <a
          key={name}
          href={href}
          data-name={name}
        >
          <IconComponent
            size={30}
            color="#ffffff"
          />
        </a>
      ))}
    </NavBarContainer>
  )
}