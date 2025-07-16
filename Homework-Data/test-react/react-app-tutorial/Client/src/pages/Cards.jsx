import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

export default function Cards({lists}) {
  return (
    <>
    <Header />
     <div>
     <Card />
     <Card />
     <Card />
      {lists.map((element, index) =>{
      return(
        <p key={index} className='pargraph-api'>{element.colore} - {element.prezzo}</p>
      )
    })}
     </div>
    </>
  )
}
