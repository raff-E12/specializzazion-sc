import { useState } from 'react'
import './App.css'
import PomodoroTimer from './assets/PomodoroTimer'
import ReduceMethod from './assets/ReduceMethod'
import Counter from './assets/ContatoreManuale'
import InputFormsMultipart from './assets/InputFormsMultipart'
import TodoApp from './assets/TodoApp'
import Shop from './assets/CarrelloProdotti'
import ToggleComponent from './assets/ToogleAvanzato'
import NotificationApp from './assets/GestionNotifiche'
import HeavySum from './assets/SommaBase'
import FilterList from './assets/LIstaFiltro'
import Parent from './MemoCount'
import SortableList from './assets/ListOrder'
import AppProfile from './assets/AppProfile'
import AppButton from './assets/ButtonSpace'
import DataFetcher from './assets/ListEliminations'

// Questi sono tutti i componenti utilizzati nel esercitazione in useReduce

function App() {

  return (
    <>
    <div className='parent'>
      <div className='box-flex'>
        <DataFetcher />
      </div>
    </div>
    </>
  )
}

export default App
