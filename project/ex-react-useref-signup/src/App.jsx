import { useState } from 'react'
import './App.css'

function App() {
  const [FullName, setFullname] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Special, setSpecial] = useState("");
  const [Experiences, setExperiences] = useState(0);
  const [Description, setDescription] = useState("");

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
     return window.alert("Devi compilare tutti i campi")  
    }

    console.log(FullName)
    return console.log("Ecco le credenziali", { FullName, Username, Password, Special, Experiences, Description});
  }

  return (
    <>
    <form className="form-container" onSubmit={e => HandleSubmitForm(e.preventDefault())}>
      <h2>Registrazione</h2>

      <div className="form-group">
        <input type="text" name="fullname" id="fullname" value={FullName} placeholder=" " required onChange={e => setFullname(e.target.value)}/>
        <label for="fullname">Nome completo</label>
      </div>

      <div className="form-group">
        <input type="text" name="username" id="username" placeholder=" " value={Username} required onChange={e => setUsername(e.target.value)}/>
        <label for="username">Username</label>
      </div>

      <div className="form-group">
        <input type="password" name="password" id="password" placeholder=" " value={Password} required onChange={e => setPassword(e.target.value)}/>
        <label for="password">Password</label>
      </div>

      <div className="form-group">
        <input type="text" name="specialization" id="specialization" placeholder=" " value={Special} required onChange={e => setSpecial(e.target.value)}/>
        <label for="specialization">Specializzazione (es. Fullstack Developer)</label>
      </div>

      <div className="form-group">
        <input type="number" name="experience" id="experience" placeholder=" " min="0" value={Experiences} required onChange={e => setExperiences(e.target.value)}/>
        <label for="experience">Anni di esperienza</label>
      </div>

      <div className="form-group">
        <textarea name="description" id="description" placeholder=" " value={Description} required onChange={e => setDescription(e.target.value)}></textarea>
        <label for="description">Breve descrizione</label>
      </div>

      <button type="submit" className="submit-btn">Registrati</button>
  </form>
    </>
  )
}

export default App
