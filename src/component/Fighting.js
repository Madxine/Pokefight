import { useContext, useEffect, useState } from 'react';
import fightBG from '../assets/fighting-background.jpg';
import '../CSS/Fighting.css';
import { PokeContext } from '../context/PokeContext';
import arrow from '../assets/arrow (1).png';
import attBG from '../assets/BOX.png';



export default function Fighting ({ onePokemon, enemyPokemon  }){
    const {fight, setFight} = useContext(PokeContext);
    const [attack, setAttack] = useState(false);
    const [enemyHp, setEnemyHp] = useState(enemyPokemon.hp);
    const [myHp, setMyHp] = useState(onePokemon.hp);
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);
    const [hurt, setHurt] = useState(false);
    const [isHover, setIsHover] = useState(false);
    console.log(`onePokemon${onePokemon.hp}`);
    const attackPoint = Number(onePokemon.attack)/Number(onePokemon.moves.length);
    const hurtPoint = Number(enemyPokemon.attack)/Number(enemyPokemon.moves.length)
    console.log(`myHp: ${myHp}, hurtPoint: ${hurtPoint}`);

      console.log(`1.attack? ${attack}`);
      console.log(`1.hurt? ${hurt}`);

    const handleAttack = ()=>{
        setAttack(true);
        setTimeout(()=> setAttack(false),8000);
        
        if (Number(enemyHp)-Number(attackPoint)<=0){
            setEnemyHp(0);
            setWin(true);        
        }else if(Number(enemyHp)-Number(attackPoint)>=0){
            setEnemyHp(Math.round(Number(enemyHp)-Number(attackPoint)))
        } 
    };
      console.log(`2.attack? ${attack}`);
      console.log(`2.hurt? ${hurt}`);

     const handleHurt = ()=>{
        setTimeout(()=> setHurt(false),3000);
         if(enemyHp!=0 && Number(myHp)-Number(hurtPoint)<=0){
            setMyHp(0);
            setLose(true);
        }else if(enemyHp!=0 && Number(myHp)-Number(hurtPoint)>=0){
            setMyHp(Math.round(Number(myHp)-Number(hurtPoint)));
        }
     };

    useEffect(()=>{
        if(enemyHp != 0 && attack) setTimeout(()=>setHurt(true),8000);
    },[attack]) 

    useEffect(()=>{
       if(hurt) handleHurt()
    },[enemyHp, hurt]);

    useEffect(()=>{
        if(win){
           setTimeout(()=>alert('You Win!'),2000);
        };
    },[win]);

    useEffect(()=>{
        if(lose){setTimeout(()=>alert('You Lose!'), 2000); setHurt(false)}
    },[lose]);

      console.log(`3.attack? ${attack}`);
      console.log(`3.hurt? ${hurt}`);




    return( 
        <div className="fighting" key={onePokemon._id} style={{backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundImage:`url(${fightBG})`}}>
        <div className='twoPokemon'>
            <div className="enemyContainerFight">
            <h3>{enemyPokemon.name}</h3>
            <div className='enemyBloodContainer'>
            <div className='enemyBlood'></div>
            <h5>HP: {!attack? enemyHp : null}</h5>
            </div>
            </div>
        <div className="enemyContainerFight">           
            <img className={attack?'enemyPokemon-hurt': (hurt? 'enemyPokemon-att':'enemyContainer>img')} src={enemyPokemon.url}/>
        </div>
        <div className="YourContainerFight">          
            <img  className={attack?'yourpokemon-att': (hurt? 'yourpokemon-hurt':'YourContainer>img')} src={onePokemon.url}/>         
        </div>
        <div className="YourContainerFight">
            <h3>{onePokemon.name}</h3>
            <div className='yourBloodContainer'>
            <div className= 'yourBlood'></div>
            <h5>HP: {!hurt? myHp : null}</h5>
            </div>
            <ul className='att-list'>
                {onePokemon.moves.map((m, index)=><li style={{listStyle:'none'}}>{isHover === index && <img className="arrow" src={arrow}/>} <button disabled={attack || hurt || lose || win} onClick={()=> handleAttack()} onMouseEnter={()=>setIsHover(index)} onMouseLeave={()=>setIsHover(null)}>{m}</button></li>)}
            </ul>
        </div>
        </div>
        <button onClick={()=>setFight(false)}>Give Up</button>
        <button>Save Game</button>
        </div>
    )
}