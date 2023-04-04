import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'



export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title='Excluir nota' />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente autem excepturi consequatur nobis dicta laborum 
            perferendis facilis natus aspernatur omnis! Officiis labore 
            ab et minus harum alias rem fuga nisi?</p>
          <Section title="Links Uteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br</a></li>
              <li><a href="#">https://rocketseat.com.br</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title={'express'} />
            <Tag title={'node'} />
          </Section>
          <Button title='Voltar' />
        </Content>
      </main>
    </Container>
  )
}