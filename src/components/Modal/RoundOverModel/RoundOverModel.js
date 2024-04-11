import React, {useContext} from 'react'
import { Title, SubTitle } from '../../../styles/General.styled'
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled'
import Button from "../../Button/Button"
import { GameContext } from '../../../contexts/GameContext'
import {ModalContext} from "../../../contexts/ModalContext"
import { SfxContext } from '../../../contexts/SoundEffectsContext'
import {useNavigate} from 'react-router-dom'


const RoundOverModel = () => {
  const { hoverSfx, clickSfx, completedSfx } = useContext(SfxContext);
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const navigate = useNavigate();


  return (
    <>
      <ModalHeader>
        <Title primary>{game.roundWinner === "draw" ? "Draw" : `${game.roundWinner.name} Won !!`} </Title>
      </ModalHeader>
      <ModalBody>
        <SubTitle primary>Choices will be switched now</SubTitle>
        <SubTitle primary>{game.player1.name} : {game.player1.score}</SubTitle>
        <SubTitle primary>{game.player2.name} : {game.player2.score}</SubTitle>
      </ModalBody>

      <ModalFooter>
        <Button onMouseEnter={() => hoverSfx()} color="#f9c811" onClick={() => {
          handleModal();
          resetBoard();
          
        }}>Continue</Button>
        <Button onMouseEnter={() => hoverSfx()} color="#8437f9" onClick={() => {
          // clickSfx();
          completedSfx();
          restartGame();
          handleModal();
          navigate("/")
        }} >Restart</Button>
      </ModalFooter>
       </>
  )
}

export default RoundOverModel