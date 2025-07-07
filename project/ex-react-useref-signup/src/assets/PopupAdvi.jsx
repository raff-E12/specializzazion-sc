import React from 'react'

const PopupAdvi = React.memo(({isNotificate, setNotificate, isText}) => {
  return (<>
    <div className={`popup-overlay ${isNotificate ? "active" : "" }`} id="popup">
    <div className="popup-box">
        <h3>{isText.title}</h3>
        <p>{isText.desc}</p>
        <button className="close-btn" onClick={() => setNotificate(false)}>Chiudi</button>
    </div>
    </div>
  </>)
})

export default PopupAdvi