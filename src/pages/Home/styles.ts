import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 4rem 2rem;
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
    width: 25rem;
  }
`;

export const Working = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: calc(-1rem);
  background: ${(props) => props.theme["tertiary"]};
  border-radius: 5px;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  padding: 0.5rem;

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
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 20px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      padding: 10px 0;
      gap: 16px;
      
      span {
        font-size: 2.5rem;
        font-family: "IBM Plex Mono", monospace;
        font-weight: 500;
        color: ${(props) => props.theme["accent"]};
      }

      p {
        font-size: 1rem;
        text-align: left;
        font-family: "Fira Code", monospace;
        font-weight: lighter;
        width: 230px;
      }
    }
  }
`;
