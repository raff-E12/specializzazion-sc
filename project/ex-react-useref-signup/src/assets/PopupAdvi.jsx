import React from 'react'

export default function PopupAdvi() {
  return (<>
    <div class="popup-overlay" id="popup">
    <div class="popup-box">
        <h3>Registrazione completata ✅</h3>
        <p>Grazie per esserti registrato! Ti contatteremo presto.</p>
        <button class="close-btn" onclick="closePopup()">Chiudi</button>
    </div>
    </div>
  </>)
}
