import { isValidElement, useMemo, useRef, useState, useEffect } from 'react'
import './App.css'
import PopupAdvi from '../src/assets/PopupAdvi'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;

function App() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Description, setDescription] = useState("");

  const [isNotificate, setNotificate] = useState(false);
  const [isTarget, setTarget] = useState(null);
  const [isText, setText] = useState({title: null, desc: null});

  const FullnameRef = useRef();
  const SpecialRef = useRef();
  const ExperiencesRef = useRef();
  const FormRef = useRef();

  function HandleSubmitForm() {

    // Input non controllati
    const FullName = FullnameRef.current.value;
    const Experiences = Number(ExperiencesRef.current.value);
    const Special =  SpecialRef.current.value;

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
      setNotificate(true);
      return setText({title: "Un avvertimento!!", desc: "Devi Completare la Registazione per accedere."});
    }

    setNotificate(true)
    return setText({title: "Congratulazioni!!", desc: "Sei Stato Appena Registrato Nel Nostro Sito."});
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

  useEffect(() => { FullnameRef.current.focus() }, []);

  const HandleSubmitReset = () => {
    setUsername("");
    setPassword("");
    setDescription("");
    FullnameRef.current.value = "";
    SpecialRef.current.value = "";
    ExperiencesRef.current.value = "";
    FullnameRef.current.focus();
  }

  return (
    <>
    <form className="form-container" onSubmit={e => HandleSubmitForm(e.preventDefault())} ref={FormRef}>
      <h2>Registrazione</h2>

      <div className="form-group">
        <input type="text" name="fullname" id="fullname"  placeholder=" " required ref={FullnameRef}/>
        <label htmlFor="fullname">Nome completo</label>
      </div>

      <div className="form-group">
        <input type="text" name="username" onFocus={e => setTarget(e.target.name)} onBlur={() => setTarget(null)} id="username" placeholder=" " value={Username} required onChange={e => setUsername(e.target.value)}/>
        <label htmlFor="username">Username</label>      
        <small className="input-hint">{!IsValidUsername && isTarget === "username" && Username !== "" ? "Scegli un username unico (es. mariodev123).": ""}</small>
      </div>

      <div className="form-group">
        <input type="password" name="password" id="password" onFocus={e => setTarget(e.target.name)} onBlur={() => setTarget(null)} placeholder=" " value={Password} required onChange={e => setPassword(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <small className="input-hint">{!isValidPassword && isTarget === "password" && Password !== "" ? "Minimo 8 caratteri, almeno una lettere, un simbolo e un numero.": ""}</small>
      </div>

      <div className="form-group">
        <input type="text" name="specialization" id="specialization" placeholder=" " required ref={SpecialRef}/>
        <label htmlFor="specialization">Specializzazione (es. Fullstack Developer)</label>
      </div>

      <div className="form-group">
        <input type="number" name="experience" id="experience" placeholder=" " min="0" required ref={ExperiencesRef}/>
        <label htmlFor="experience">Anni di esperienza</label>
      </div>

      <div className="form-group">
        <textarea name="description" id="description" placeholder=" " onFocus={e => setTarget(e.target.name)} onBlur={() => setTarget(null)} value={Description} required onChange={e => setDescription(e.target.value)}></textarea>
        <label htmlFor="description">Breve descrizione</label>
        <small className="input-hint">{!isValidDescription && isTarget === "description" && Description !== "" ? "La Descrizione deve essere tra i gli 100 e 1000 caratteri.": ""}</small>
      </div>

      <div class="form-buttons">
        <button type="submit" className="submit-btn">Registrati</button>
        <button type="reset" className="reset-btn" onClick={e => HandleSubmitReset(e.preventDefault())}>Reset</button>
      </div>
    </form>
    <PopupAdvi isNotificate={isNotificate} setNotificate={setNotificate} isText={isText}/>
    <button className="scroll-top-btn" onClick={() => { FormRef.current.scrollIntoView({ behavior: "smooth" });  } } title="Torna su"><i className="fa-solid fa-arrow-up"></i></button>
    </>
  )
}

export default App
