import React from 'react'

export default function PopUp({Adv, setAdv}) {
  return (<>
    <div id="popup" className={`popup-alert alert alert-dismissible ${Adv ? "show" : "fade"}`}>
        <span id="popupMessage">Operazione Eseguita con successo!!</span>
        <button type="button" className="btn-close" aria-label="Chiudi" onClick={() => setAdv(false)}></button>
    </div>
  </>)
}
