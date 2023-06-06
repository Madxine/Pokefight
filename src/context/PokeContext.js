import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

export default function PokeContextProvider(props){
const [pokemons, setPokemons] = useState([]);
const [fight, setFight] = useState(false);
const [query, setQuery] = useState("");
const getPokemon = async() => { 
const res = await fetch(`https://pokebackend-oxnq.onrender.com/pokemons`);
const data = await res.json();
console.log(data.data);
setPokemons(data.data);
};

useEffect(()=>{
    getPokemon();   
},[]);
// console.log(pokemons);


    return(
       <PokeContext.Provider value={{pokemons, setPokemons, query, setQuery, fight, setFight}}>{props.children}</PokeContext.Provider>
    )
}