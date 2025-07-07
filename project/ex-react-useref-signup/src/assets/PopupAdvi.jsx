import React from 'react'

const PopupAdvi = React.memo(({isNotificate, setNotificate}) => {
  return (<>
    <div className={`popup-overlay ${isNotificate ? "active" : "" }`} id="popup">
    <div className="popup-box">
        <h3>Un avvertimento!!</h3>
        <p>Devi Completare la Registazione per accedere.</p>
        <button className="close-btn" onClick={() => setNotificate(false)}>Chiudi</button>
    </div>
    </div>
  </>)
})

export default PopupAdvi