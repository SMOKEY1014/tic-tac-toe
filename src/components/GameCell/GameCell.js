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
import { SfxContext } from '../../contexts/SoundEffectsContext'


const GameCell = ({ cellItem, index, iswinningcell, isgamedrawn, ...rest }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext)
const { hoverSfx, clickSfx, winSfx, completedSfx } = useContext(SfxContext);



  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);

    if (result != null) {
      if (result === false) {
        completedSfx();
      } else {
        winSfx();
      };
      roundComplete(result);
      console.log(result)
      setTimeout(() => {
        handleModal(<RoundOverModel />);
      }, 2000)
    }
  }



  if (cellItem === "X") {
    return (<CellStyle iswinningcell={iswinningcell !== undefined ? iswinningcell : false} isgamedrawn={isgamedrawn !== undefined ? isgamedrawn : false} ><IconX className="markedItem" /></CellStyle>);
  } else if (cellItem === "O") {
    return (<CellStyle iswinningcell={iswinningcell !== undefined ? iswinningcell : false} isgamedrawn={isgamedrawn !== undefined ? isgamedrawn : false} ><IconO className="markedItem"/></CellStyle>);
  }

  return (
    <CellStyle onMouseEnter={() => hoverSfx()} onClick={cellClickHandler}>{game.turn === "X" ? (<XIconOutline className="outlineIcon"/>) : (<OIconOutline className="outlineIcon"/>)}</CellStyle>
  )
}

export default GameCell