import { HomeContainer, SaluteContainer, Working, AvatarSection, Highlights } from "./styles";
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
            <p>
              Playlists para dar aquele gás no trabalho
            </p>
          </li>
          <li>
            <p>
              Playlists para dar aquele gás no trabalho
            </p>
          </li>
          <li>
            <p>
              Playlists para dar aquele gás no trabalho
            </p>
          </li>
          <li>
            <p>
              Playlists para dar aquele gás no trabalho
            </p>
          </li>
        </ul>
      </Highlights>
    </HomeContainer>
  )
}