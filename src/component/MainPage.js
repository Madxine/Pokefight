import { Routes, Route } from 'react-router-dom'
import GameBoy from './GameBoy'
import TypeTab from './TypeTab'
import { CSSTransition } from 'react-transition-group';
import WaittingRoom from './WaittingRoom'
import Fighting from './Fighting'

function MainPage() {
   

  return (
    <div> 
    <Routes>
    <Route path='/' element={<GameBoy/>}/>
    <Route path='/typetab' element={<TypeTab/>}/>
    <Route path='/typetab/:pokemonId' element={<WaittingRoom/>}/>
    <Route path='/typetab/:pokemonId/fighting' element={<Fighting/>}/>
    </Routes>
    </div>
  )
}

export default MainPage