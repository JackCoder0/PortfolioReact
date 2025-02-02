import styled from "styled-components";

export const NavBarContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 999;

  margin-top: 2rem;
  padding: 17px;
  gap: 10px;
  width: 3.5rem;

  background-color: ${(props) => props.theme["tertiary"]};
  border-radius: 50px;
  border: 1px ${(props) => props.theme["white"]} solid;
`;
