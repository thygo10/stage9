import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'


export function Header(){
  return(
    <Container >
      <Profile to='/profile'>
        <img src="https://github.com/thygo10.png" alt="Foto do Usuário" />
      <div>
        <span>Bem-vindo,</span>
        <strong>Thiago Farias</strong>
      </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}