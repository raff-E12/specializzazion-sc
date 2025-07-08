import './App.css'
import useSwitch from './assets/hooks/UseSwitch'
import UseDate from './assets/hooks/UseDate';
import UsePosition from './assets/hooks/UsePosition'
import UseKey from './assets/hooks/UseKey';

function App() {
  const [isOn, toogle] = useSwitch();
  const currentDate = UseDate();
  const targetKey = UseKey("Enter")
  const CostumePointer = UsePosition("§", "cursor-box");

  return (
    <>
    <div className='container'>
      <button className='btn' onClick={toogle}>Switch</button>
    </div>
    <p id='text-info'><b>Valore:</b>{isOn ? "ON" : "OFF"}</p>

    <div className='container'>
      <h1 className='letter'>Data e ora attuali:</h1>
      <p className='letter index'>{currentDate.toLocaleString()}</p>
    </div>

    <div className='container cursor' style={{marginTop: "40px", position: "relative"}} id='cursor-box'>
      {CostumePointer}
    </div>

    <div className='container' style={{marginTop: "40px", position: "relative"}}>
      <p className='letter index'>{!targetKey ? "Il Pulsante è premuto." : "Il Pulsante non è premuto."}</p>
    </div>
    </>
  )
}

export default App
