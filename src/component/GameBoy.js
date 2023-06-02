import pic from '../assets/Removal-559.png';
import logo from '../assets/International_Pokémon_logo.svg.png';
import '../CSS/GameBoy.css';
import { NavLink } from 'react-router-dom';


function GameBoy() {


  return ( 
    <div className='gameboy'>           
        <div className='screen'>
        <img src={logo} alt='logo'></img>
        <p>Play</p>
        </div>      
        <NavLink to='/typetab'><button className='button'></button></NavLink>
        <img src={pic} alt='gameboy'/>  
  </div>
  )
}

export default GameBoy