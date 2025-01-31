import { CircleUser, CodeXml, FileCode, GraduationCap, LayoutGrid, Mail, Monitor } from "lucide-react";
import { NavBarContent } from "./styles";

export function Navbar() {
  return (
    <NavBarContent>
      <a href="">
        <LayoutGrid size={32} color="#ffffff" />
      </a>
      <a href="">
        <CircleUser size={32} color="#ffffff" />
      </a>
      <a href="">
        <GraduationCap size={32} color="#ffffff" />
      </a>
      <a href="">
        <Monitor size={32} color="#ffffff" />
      </a>
      <a href="">
        <CodeXml size={32} color="#ffffff" />
      </a>
      <a href="">
        <FileCode size={32} color="#ffffff" />
      </a>
      <a href="">
        <Mail size={32} color="#ffffff" />
      </a>
    </NavBarContent>
  )
}