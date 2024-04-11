import React from 'react'
import { PlayerWrapper, AvatarWrapper } from './Player.styled'
import Avatar from 'react-nice-avatar'
import { SubTitle } from '../../styles/General.styled'


const Player = ({ player, isPlayerActive }) => {

  return (
    <PlayerWrapper >

      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <SubTitle style={{ "justify-content": "space-between",  "padding-left": "5px"}}>{` ${player.name} (${player.choice})`}</SubTitle>
      <SubTitle style={{"padding-left": "5px"}}>{player.score}</SubTitle>
    </PlayerWrapper>
  )
}

export default Player