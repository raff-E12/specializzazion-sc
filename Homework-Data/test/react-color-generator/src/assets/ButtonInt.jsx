import React, { useEffect, useState } from 'react'

export default function ButtonInt() {
  const [typeofColor, setTypeColor] = useState('Hex');
  const [color, setColor] = useState('#91B221');

  //la funzione randomColorUtility fa da ponte per la selezione del colore random
  // da RBG a HEX distribuita nelle due funzioni in callback con questa che danno come risultato
  //valori casuali delle singole conversioni nel css.

  function randomColorUtility(length){
    return Math.floor(Math.random()*length);
  }

  //la funzione di sopra e il fulcro principale

  function handleClickRandomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D','E','F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleClickRandomRBGColor(){
    const red = randomColorUtility(256);
    const green = randomColorUtility(256);
    const black = randomColorUtility(256);

    setColor(`rgb(${red},${green},${black})`)
  }

  useEffect(()=>{
    if (typeofColor === 'RBG') {
      handleClickRandomRBGColor();
    } else{
      handleClickRandomHexColor();
    }
  },[typeofColor])

  return (
    <section className='color-gen-component'>
        <div className='text-top'>
            <h2>{`Set Color Select: ${typeofColor} Color.`}</h2>
        </div>
        <div className='cube-swap'>
            <div className='cube' style={{background:`${color}`}}>
            <h4>{color}</h4>
            </div>
        </div>
        <div className='btns-list-gen'>
            <button onClick={()=>setTypeColor('Hex')}>Create HEX Color</button>
            <button onClick={()=>setTypeColor('RBG')}>Create RBG Color</button>
            <button onClick={typeofColor === 'Hex' ? handleClickRandomHexColor : handleClickRandomRBGColor}>Generate Color Random</button>
        </div>
    </section>
  )
}
