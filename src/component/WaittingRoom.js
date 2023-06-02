import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import '../CSS/WaittingRoom.css';
import vs from '../assets/verses.png';
import Fighting from "./Fighting";


export default function WaittingRoom(){
    const {pokemonId} = useParams();
    const Navigate = useNavigate();
    const {pokemons, fight, setFight} = useContext(PokeContext);
    const onePokemon = pokemons.find((p)=> p._id === pokemonId);
    console.log(onePokemon);
    const enemyPokemon = pokemons[Math.floor(Math.random()*pokemons.length)];
    

    return(
        <div key={onePokemon._id}>
            <div className="waittingContainer">
        <div className="YourContainer" >
            <h1>Your Choice: {onePokemon.name}</h1>
            <img src={onePokemon.url}/>
            <h3>HP: {onePokemon.hp}</h3>
            <h3>Attack: {onePokemon.attack}</h3>
            <h3>Defence: {onePokemon.defense}</h3>    
        </div>
        <img src={vs} alt="vs" style={{height:"5rem", position:"absolute", marginTop:"10%"}}/>
        <div className="enemyContainer">
            <h1>Your Enemy: {enemyPokemon.name}</h1>
            <img src={enemyPokemon.url}/>
            <h3>HP: {enemyPokemon.hp}</h3>
            <h3>Attack: {enemyPokemon.attack}</h3>
            <h3>Defence: {enemyPokemon.defense}</h3>    
        </div>
        </div>
        <diiv className="waittingButton">
        <button className="goBackButton" onClick={()=>Navigate(-1)}>Go Back</button>
        <button className="goBackButton" onClick={()=>setFight(true)}>Fight</button>
        </diiv>
        {fight?<div className="fighting"><Fighting/></div>:null}
        </div>
    )
}