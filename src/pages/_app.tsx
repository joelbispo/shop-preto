import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.png'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} width={40} height={40} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
