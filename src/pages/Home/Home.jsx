import React, { useContext } from 'react'
import { Container } from './Home.styled'
import { Title, SubTitle } from './../../styles/General.styled'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { SfxContext } from '../../contexts/SoundEffectsContext'

const Home = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title isDarkMode>TicTacToe</Title>
      <SubTitle>Play with your friends and score big</SubTitle>
      <Button onMouseEnter={() => hoverSfx()}
        onClick={() => {
          clickSfx();
          navigate("/game-on")
        }}>Play now</Button>
    </Container>
  )
}

export default Home