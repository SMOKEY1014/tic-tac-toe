import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import {DarkModeIcon, HeaderWrapper, LightModeIcon} from './Header.styled'
import {ReactComponent as Logo} from "../../assets/svgs/tic-tac-toe.svg"
import { useNavigate } from 'react-router-dom'
import { SfxContext } from '../../contexts/SoundEffectsContext'


const Header = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => { clickSfx(); navigate("/")}} onMouseEnter ={() => hoverSfx()}/>
      
      <span onMouseEnter={() => hoverSfx()} onClick={() => { clickSfx(); toggleTheme()}}>{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}</span>
          {/* <button onClick={() => toggleTheme()}>Toogle Theme</button> */}
          
    </HeaderWrapper>
  )
}

export default Header