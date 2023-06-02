import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import '../CSS/TypeTab.css';
import { useContext, useEffect, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import { Link, NavLink, Navigate } from "react-router-dom";
import pokeball from '../assets/pokeballclosed.png'



export default function TypeTab (){
    const { pokemons, setTypeNumber, setQuery, query} = useContext(PokeContext);
    const [inputValue, setInputValue] = useState("");

    const getInput = (e)=>{
        setInputValue(e.target.value)
    };
    const getResult = (e)=>{
        e.preventDefault();
        setQuery(inputValue);
        setInputValue("");
    };
  
   const goBack = ()=>{
    window.history.back()
   }

    return(
        <>
        {/* <form onSubmit={getResult}>
            <input onChange={getInput} value={inputValue} placeholder="Find your Pokemon"></input>
            <button className="searchButton">Search</button>
        </form> */}
        <div className="bg-frame">
        <Tabs  key={pokemons._id}  className="Tabs">
        <TabList className="TabList">
            <Tab>Fire</Tab>
            <Tab>Water</Tab>
            <Tab>Grass</Tab>
            <Tab>Electric</Tab>
            <Tab>Flying</Tab>
            <Tab>Rock</Tab>
            <Tab>Bug</Tab>
            <Tab>Fighting</Tab>
            <Tab>Psychic</Tab>
            <Tab>Ground</Tab>
            <Tab>Ghost</Tab>
            <Tab>Normal</Tab>
            <Tab>Legendary</Tab>
        </TabList>
        <TabPanel className="TabPanel">
           <span className="type-box-9-icon sprite-type sprite-type-火"></span>
           {pokemons?.filter((p)=>p.type.substring(0,4) === "Fire" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,5) === "Water" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,5) === "Grass" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,8) === "Electric" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,6) === "^[a-zA-Z]+$Flying^[a-zA-Z]+$" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,4) === "Rock" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,3) === "Bug" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,8) === "Fighting" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,7) === "Psychic" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,6) === "Ground" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,5) === "Ghost" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.type.substring(0,6) === "Normal" && p.legendary !=true).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        <TabPanel className="TabPanel">
            <span className="type-box-9-icon sprite-type sprite-type-火"></span>
            {pokemons?.filter((p)=>p.legendary != false).map((p)=>
            <div className="pokemoncontainer">
                <Link to={`/typetab/${p._id}`}><img src={p.url}/>
                <br/><img className="pokeball" src={pokeball}/> {p.name} <img className="pokeball" src={pokeball}/></Link>
            </div>)}
        </TabPanel>
        </Tabs>
      <button className="exitButton" onClick={goBack}>EXIT GAME</button>
      </div>
      </>   
    )
}