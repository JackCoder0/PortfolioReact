import styled from "styled-components";

export const NavBarContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 30%;
  z-index: 999;

  padding: 17px;
  gap: 10px;
  width: 3.5rem;

  background-color: ${(props) => props.theme["tertiary"]};
  border-radius: 50px;
  border: 1px ${(props) => props.theme["text"]} solid;
`;
