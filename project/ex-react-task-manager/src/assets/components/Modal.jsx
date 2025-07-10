import React from 'react'
import { createPortal } from "react-dom"

export default function Modal({title, content, show, onClose, onConfirm, confirmText = "Conferma"}) {

    if (!show) return null; // Se la prop è falsa non restituisce nulla.
    
    return createPortal( <div id="confirmModal" className={`modal-overlay ${show ? "" : "d-none"}`}>
        <div className="modal-content fade-in">
        <h5 className="mb-3">{title}</h5>
        <p>{content}</p>

        <div class="modal-footer">
            <button className="btn-custom btn-secondary" onClick={onClose}>Annulla</button>
            <button className="btn-custom btn-danger-custom" onClick={onConfirm}>{confirmText}</button>
        </div>
        </div>
    </div>, document.body
    )
}
