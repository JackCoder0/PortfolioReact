import {
  HomeContainer,
  SaluteContainer,
  Working,
  AvatarSection,
  Highlights
} from "./styles";
import Avatar from "../../assets/avatar2d.svg"

export function Home() {
  return (
    <HomeContainer>
      <SaluteContainer>
        <section>
          👋 Saudações!
        </section>

        <div>
          <h1>JACKSON SILVA</h1>
          <span>Desenvolvedor Web</span>
          <p>e</p>
          <span>Desenvolvedor Front-End</span>
        </div>
      </SaluteContainer>

      <AvatarSection>
        <img src={Avatar} alt="Avatar estilizado de Jackson Silva" />
        <Working>
          <div></div>
          <main>
            <p>Atualmente tabalhando na</p>
            <p>Prefeitura de Santo André</p>
          </main>
        </Working>
      </AvatarSection>

      <Highlights>
        <ul>
          <li>
            <span>6</span>
            <p>Playlists para dar aquele gás no trabalho</p>
          </li>
          <li>
            <span>5</span>
            <p>Cafés que não podem faltar no meu dia</p>
          </li>
          <li>
            <span>4</span>
            <p>Cursos para turbinar minhas skills</p>
          </li>
          <li>
            <span>3</span>
            <p>Jogos de história que me marcaram</p>
          </li>
        </ul>
      </Highlights>
    </HomeContainer>
  )
}