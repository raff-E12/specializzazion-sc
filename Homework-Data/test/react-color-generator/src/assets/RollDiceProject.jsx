import React, { useState } from 'react'
import DieFace from './DieFace'

export default function RollDiceProject() {
  const [isProps, setProps] = useState(['1', '2', '3','4', '5', '6']);
  const [Dice1, SetDice1] = useState('1');
  const [Dice2, SetDice2] = useState('2');
  const [rolling, setRolling] = useState(false);

  const RollDice_Fun = ()=>{
     setRolling(true)
     //il fulcro della funzione, genera un numero casuale dall array di stato creato
     setTimeout(()=>{
       SetDice1(Math.ceil(Math.random() * isProps.length));
       SetDice2(Math.ceil(Math.random() * isProps.length));
       setRolling(false);
     },1000)
  };

  const ButtonClick = rolling ? 'Rolling..' : '';

  //<DieFace face={Dice1} rolling={rolling}/> callback di funzione adottato al componente

  return (
    <section className='roll-dice'>
      <h3>Premi il Pulsante, per cominciare a giocare.</h3>
      <div className='sc-dice'>
         <div className='dice-container'>
          <DieFace face={Dice1} rolling={rolling}/>
          <DieFace face={Dice2} rolling={rolling}/>
         </div>
      </div>
      <div className='btn-container'>
        <button className={ButtonClick} disabled={rolling} onClick={RollDice_Fun}>
          {rolling ? 'Aspetta...' : 'Gira i Dadi!!'}
        </button>
      </div>
    </section>
  )
}