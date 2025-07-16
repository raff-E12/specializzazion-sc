import React from 'react'
import { Children } from 'react'
import style from "./componets.module.css"

// Esportazione del children

export default function ComponetsExports(props) {
  return (
    <ul className={style.colflex}>
        {Children.map(props.children, (element)=>{
            return(
                <li className={style.contdiv}>{element}</li>
            )
        })}
    </ul>
  )
}
