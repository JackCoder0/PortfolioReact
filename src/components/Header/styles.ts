import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme["header"]};
  border-radius: 16px;
  /* gap: 5px; */
  padding: 2px 30px;

  /* img {
    margin-left: 1.8rem;
  } */

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    a {
      display: flex;
      align-items: center;
      gap: 3px;
      text-decoration: none;
      padding: 5px;
      line-height: 0;

      svg {
        color: ${(props) => props.theme["accent"]};
      }

      span {
        color: ${(props) => props.theme["text"]};
      }
    }
  }
`;