import { isValidElement, useMemo, useState } from 'react'
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
  const [isNotificate, setNotificate] = useState(false);
  const [isTarget, setTarget] = useState(null);

  function HandleSubmitForm() {
    if (
      FullName.trim() === "" ||
      Username.trim() === "" ||
      Password.trim() === "" ||
      Special.trim()  === "" ||
      isNaN(Experiences) === 0 ||
      Experiences <= 0 ||
      Description.trim() === "" ||
      !IsValidUsername ||
      !isValidPassword ||
      !isValidDescription
    ) {
     return setNotificate(true)
    }

    setNotificate(false)
    return console.log("Ecco le credenziali", { FullName, Username, Password, Special, Experiences, Description});
  }

  const IsValidUsername = useMemo(() => {
    if (Username.length !== 0) {
      const condition = Username.split("").every(letter => 
      letters.includes(letter.toLowerCase()) || numbers.includes(letter)
    );
    return condition && Username.length >= 6
    }
  }, [Username])


  const isValidPassword = useMemo(()=> {
    if (Password.length !== 0) {
      const condition = Password.split("").some(pass => 
      letters.includes(pass.toLowerCase()) && numbers.includes(pass) ||
      symbols.includes(pass)
    )
    return condition && Password.length <= 8
    }
  }, [Password])


  const isValidDescription = useMemo(() => {
    if (Description.length !== 0) {
      const condition = Description.length >= 100 && Description.length <= 1000;
      return condition
    }
  }, [Description])

  return (
    <>
    <form className="form-container" onSubmit={e => HandleSubmitForm(e.preventDefault())}>
      <h2>Registrazione</h2>

      <div className="form-group">
        <input type="text" name="fullname" id="fullname" value={FullName} placeholder=" " required onChange={e => setFullname(e.target.value)}/>
        <label htmlFor="fullname">Nome completo</label>
      </div>

      <div className="form-group">
        <input type="text" name="username" onFocus={e => setTarget(e.target.name)} onBlur={() => setTarget(null)} id="username" placeholder=" " value={Username} required onChange={e => setUsername(e.target.value)}/>
        <label htmlFor="username">Username</label>      
        <small className="input-hint">{!IsValidUsername && isTarget === "username" ? "Scegli un username unico (es. mariodev123).": ""}</small>
      </div>



      <div className="form-group">
        <input type="password" name="password" id="password" onFocus={e => setTarget(e.target.name)} onBlur={() => setTarget(null)} placeholder=" " value={Password} required onChange={e => setPassword(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <small className="input-hint">{!isValidPassword && isTarget === "password" ? "Minimo 8 caratteri, almeno una lettere, un simbolo e un numero.": ""}</small>
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
        <textarea name="description" id="description" placeholder=" " onFocus={e => setTarget(e.target.name)} onBlur={() => setTarget(null)} value={Description} required onChange={e => setDescription(e.target.value)}></textarea>
        <label htmlFor="description">Breve descrizione</label>
        <small className="input-hint">{!isValidDescription && isTarget === "description" ? "La Descrizione deve essere tra i gli 100 e 1000 caratteri.": ""}</small>
      </div>

      <button type="submit" className="submit-btn">Registrati</button>
    </form>
    <PopupAdvi isNotificate={isNotificate} setNotificate={setNotificate}/>
    </>
  )
}

export default App
