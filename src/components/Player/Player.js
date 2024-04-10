import React from 'react'
import { PlayerWrapper } from './Player.styled'
import Avatar, { genConfig } from 'react-nice-avatar'


const Player = ({ player, isPlayerActive }) => {
  const config = genConfig();

  return (
    <PlayerWrapper isPlayerActive={isPlayerActive ?? false}>
      <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
      <div>{`${player.name}(${player.choice})`}</div>
      <div>{player.score}</div>
    </PlayerWrapper>
  )
}

export default Player