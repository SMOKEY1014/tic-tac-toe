import React from 'react'
import { PlayerWrapper, AvatarWrapper } from './Player.styled'
import Avatar from 'react-nice-avatar'
import { SubTitle } from '../../styles/General.styled'


const Player = ({ player, isPlayerActive }) => {

  return (
    <PlayerWrapper isPlayerActive={isPlayerActive ?? false}>

      <AvatarWrapper>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <SubTitle>{`${player.name} (${player.choice})`}</SubTitle>
      <SubTitle>{player.score}</SubTitle>
    </PlayerWrapper>
  )
}

export default Player