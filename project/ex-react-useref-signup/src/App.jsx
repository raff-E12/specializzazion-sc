import { useState } from 'react'
import './App.css'
import PopupAdvi from '../src/assets/PopupAdvi'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;

function App() {
  const [FullName, setFullname] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Special, setSpecial] = useState("");
  const [Experiences, setExperiences] = useState(0);
  const [Description, setDescription] = useState("");
  const [isNotificate, setNotificate] = useState(false)

  function HandleSubmitForm() {
    if (
      FullName.trim() === "" ||
      Username.trim() === "" ||
      Password.trim() === "" ||
      Special.trim()  === "" ||
      isNaN(Experiences) === 0 ||
      Experiences <= 0 ||
      Description.trim() === ""
    ) {
     return setNotificate(true)
    }

    setNotificate(false)
    return console.log("Ecco le credenziali", { FullName, Username, Password, Special, Experiences, Description});
  }

  return (
    <>
    <form className="form-container" onSubmit={e => HandleSubmitForm(e.preventDefault())}>
      <h2>Registrazione</h2>

      <div className="form-group">
        <input type="text" name="fullname" id="fullname" value={FullName} placeholder=" " required onChange={e => setFullname(e.target.value)}/>
        <label htmlFor="fullname">Nome completo</label>
      </div>

      <div className="form-group">
        <input type="text" name="username" id="username" placeholder=" " value={Username} required onChange={e => setUsername(e.target.value)}/>
        <label htmlFor="username">Username</label>
      </div>

      <div className="form-group">
        <input type="password" name="password" id="password" placeholder=" " value={Password} required onChange={e => setPassword(e.target.value)}/>
        <label htmlFor="password">Password</label>
      </div>

      <div className="form-group">
        <input type="text" name="specialization" id="specialization" placeholder=" " value={Special} required onChange={e => setSpecial(e.target.value)}/>
        <label htmlFor="specialization">Specializzazione (es. Fullstack Developer)</label>
      </div>

      <div className="form-group">
        <input type="number" name="experience" id="experience" placeholder=" " min="0" value={Experiences} required onChange={e => setExperiences(e.target.value)}/>
        <label htmlFor="experience">Anni di esperienza</label>
      </div>

      <div className="form-group">
        <textarea name="description" id="description" placeholder=" " value={Description} required onChange={e => setDescription(e.target.value)}></textarea>
        <label htmlFor="description">Breve descrizione</label>
      </div>

      <button type="submit" className="submit-btn">Registrati</button>
    </form>
    <PopupAdvi isNotificate={isNotificate} setNotificate={setNotificate}/>
    </>
  )
}

export default App
