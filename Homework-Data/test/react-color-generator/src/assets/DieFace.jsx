import React from 'react'

export default function DieFace({face, rolling}) {
  //face: si riferisce ai valori casuali e rolling: si riferisce alla variabile di segnaposto dettato dalla funzione collegato al componente

  return (
    <div className='w-full flex items-center justify-center h-[330px]'>
      <div className={`mdi dice ${rolling && 'die-shaking'} mdi-dice-${face}`}></div>
    </div>
  )
}
