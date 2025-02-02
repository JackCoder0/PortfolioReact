import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 2rem;
`;

export const SaluteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  

  section {
    background: ${(props) => props.theme["transparent"]};
    padding: 1rem;
    border-radius: 16px;
    color: ${(props) => props.theme["accent"]};
  }

  span {
    color: ${(props) => props.theme["accent"]};
  }
`;

export const AvatarSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 20rem;
  }
`;

export const Working = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: calc(-1rem);
  background: ${(props) => props.theme["tertiary"]};
  border-radius: 5px;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  padding: .5rem;

  div {
    background: ${(props) => props.theme["accent"]};
    width: 16px;
    height: 16px;
    margin-right: 1rem;
  }

  p:nth-child(even) {
    color: ${(props) => props.theme["accent"]};
  }
`;

export const Highlights = styled.div`
  background: ${(props) => props.theme["tertiary"]};
  border-radius: 80px;  
  padding: 20px;
  gap: 40px;
  width: 200px;

  ul {
    list-style: none;
  }
`;