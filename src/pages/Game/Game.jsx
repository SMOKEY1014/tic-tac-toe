import React, { useContext } from 'react'
import { GameBoardStyle } from './Game.styled'
import { Container } from '../Home/Home.styled'
import GameCell from '../../components/GameCell/GameCell'
import { GameContext } from '../../contexts/GameContext'


const Game = () => {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <GameBoardStyle>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardStyle>
    </Container>
  )
}

export default Game