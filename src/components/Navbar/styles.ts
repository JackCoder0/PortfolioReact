import styled from "styled-components";

// export const NavBarContainer = styled.nav`
//   display: flex;
//   margin-top: 2rem;
// `;

export const NavBarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  gap: 10px;
  padding: 17px;
  max-width: 3.5rem;

  background-color: ${(props) => props.theme["tertiary"]};
  border-radius: 40px;
  border: 1px ${(props) => props.theme["white"]} solid;
`;
