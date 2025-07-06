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

// Questi sono tutti i componenti utilizzati nel esercitazione in useReduce

function App() {

  return (
    <>
    <div className='parent'>
      <div className='box-flex'>
        <ToggleComponent />
        <NotificationApp />
      </div>
    </div>
    </>
  )
}

export default App
