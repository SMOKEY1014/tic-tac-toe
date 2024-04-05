import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Game from './pages/Game/Game'
import Deatails from './pages/Details/Deatails'

const Router = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/details' element={<Deatails />} />
              <Route path='/game-on' element={<Game/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default Router