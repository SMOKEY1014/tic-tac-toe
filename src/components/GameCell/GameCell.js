import React, { useContext } from 'react'
import { CellStyle } from './GameCell.styled'
import { GameContext } from '../../contexts/GameContext'
import { checkForWinner } from '../../utils/GameUtils'
import {ReactComponent as IconX} from "../../assets/svgs/icon-x.svg"
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg"
import {ReactComponent as XIconOutline} from "../../assets/svgs/icon-x-outline.svg"
import {ReactComponent as OIconOutline} from "../../assets/svgs/icon-o-outline.svg"
import { ModalContext } from '../../contexts/ModalContext'
import RoundOverModel from '../Modal/RoundOverModel/RoundOverModel'
import RoundDrawModel from '../Modal/RoundOverModel/RoundDraw'


const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete, updateBoardDraw, roundCompleteDraw } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext)
  

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);

    if (result) {
      roundComplete();
      handleModal(<RoundOverModel />);
    } else if (result === false) {
      updateBoardDraw();
      roundCompleteDraw();
      handleModal(<RoundDrawModel />);
    }
  }



  if (cellItem === "X") {
    return (<CellStyle><IconX className="markedItem"/></CellStyle>);
  } else if (cellItem === "O") {
    return (<CellStyle><IconO className="markedItem"/></CellStyle>);
  }

  return (
    <CellStyle onClick={cellClickHandler}>{game.turn === "X" ? (<XIconOutline className="outlineIcon"/>) : (<OIconOutline className="outlineIcon"/>)}</CellStyle>
  )
}

export default GameCell