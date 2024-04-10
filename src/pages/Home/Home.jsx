import React from 'react'
import { Container } from './Home.styled'
import { Title, SubTitle } from './../../styles/General.styled'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title isDarkMode>TicTacToe</Title>
      <SubTitle>Play with your friends and score big</SubTitle>
      <Button onClick={() => navigate("/game-on")}>Play now</Button>
    </Container>
  )
}

export default Home