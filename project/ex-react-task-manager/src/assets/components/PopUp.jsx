import React from 'react'

export default function PopUp({Adv, setAdv, text}) {
  return (<>
    <div id="popup" className={`popup-alert alert alert-dismissible ${Adv ? "show" : "fade"}`}>
        <span id="popupMessage">{text}</span>
        <button type="button" className="btn-close" aria-label="Chiudi" onClick={() => setAdv({type: "FORMAT_ADV", payload: false})}></button>
    </div>
  </>)
}
