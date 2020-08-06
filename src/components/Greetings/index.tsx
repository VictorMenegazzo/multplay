import React from 'react'

import { Container, Image, Text, Title } from './styles'

const Greetings: React.FC = () => {
  return (
    <Container>
      <Image
        src="https://i.imgur.com/WTnxW2Z.png"
        alt="Multplay logo"
      />
      <Title>Loading...</Title>
      <Text>Multplay is a beautiful game launcher that brings all your games together in one place</Text>
    </Container>
  )
}

export default Greetings
