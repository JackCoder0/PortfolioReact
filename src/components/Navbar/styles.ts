import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 30%;
  z-index: 999;

  padding: 17px;
  gap: 10px;
  width: 3.5rem;
  line-height: 0;

  background-color: ${(props) => props.theme["tertiary"]};
  border-radius: 50px;
  border: 1px ${(props) => props.theme["text"]} solid;

  a {
    padding: 5px;
    transition: background-color 0.3s ease;
    border-radius: 50%;
    position: relative;

    &::after {
      content: attr(data-name);
      position: absolute;
      top: 50%;
      left: 150%;
      transform: translateY(-50%);
      background: ${(props) => props.theme["white"]};
      color: ${(props) => props.theme["black"]};
      font-size: 1rem;
      font-family: 'Nunito', sans-serif;
      padding: 16px;
      border-radius: 5px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 2s ease;
    }

    &:hover::after {
      animation: fadeIn .5s forwards;
      opacity: 1;
    }
  }

  a.active {
    background-color: ${(props) => props.theme["white"]};

    svg {
      stroke: ${(props) => props.theme["black"]};
    }
  }

  a:hover {
    background: ${(props) => props.theme["white"]};

    svg {
      stroke: ${(props) => props.theme["black"]};
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
