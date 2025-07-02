import { useReducer, useState } from 'react';
import './App.css';

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_CART":
      const name = action.payload;
      const existing = state.find(item => item.name === name);
      if (existing) {
        return state.map(item =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { name: name, quantity: 1 }];
      }

      // Questo caso non ha il "brack", perchè è collegato in un solo processo di ritorno. 

    case "UPDATE_CART":
      const { name: updateName, quantity } = action.payload;
      if (isNaN(quantity) || quantity < 1) return state;
      return state.map(item =>
        item.name === updateName ? { ...item, quantity: parseInt(quantity) } : item
      );

    case "REMOVE_CART":
      return state.filter(item => item.name !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [isShow, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedProducts, dispatchCart] = useReducer(CartReducer, []);
  const [inputQty, setInputQty] = useState(1);

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const getPrice = (name) => products.find(p => p.name === name)?.price || 0;

  const totalCart = () => {
    return addedProducts.reduce((acc, item) => {
      return acc + getPrice(item.name) * item.quantity;
    }, 0);
  };

  return (
    <>
      <div className="container">
        {/* Lista Prodotti */}
        <div className="section">
          <h2>Prodotti Disponibili</h2>
          {products.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-qty">Prezzo: €{item.price.toFixed(2)}</div>
              </div>
              <a className="btn" onClick={() => dispatchCart({ type: "ADD_CART", payload: item.name })}>Aggiungi</a>
            </div>
          ))}
        </div>

        {/* Carrello */}
        <div className="section card">
          <h2>Carrello</h2>
          {addedProducts.length === 0 ? (
            <div className="placeholder">Il carrello è vuoto.</div>
          ) : (
            addedProducts.map((item, index) => (
              <div className="item" key={index}>
                <div className="item-info" onClick={() => { setShow(true); 
                  setInputQty(item.quantity);
                  setSelectedItem(item); }}>
                  <div className="item-name">{item.name}</div>
                  <div className="item-qty">Quantità: {item.quantity}</div>
                </div>
                <a href="#" className="btn" onClick={() => dispatchCart({ type: "REMOVE_CART", payload: item.name })}>Rimuovi</a>
              </div>
            ))
          )}
        </div>

        {/* Popup */}
        {isShow && selectedItem && (
          <div className="popup-overlay flex" id="popup">
            <div className="popup">
              <h2>Modifica quantità per {selectedItem.name}</h2>
              <input type="number" min="1" max="100" value={inputQty} onChange={(e) => setInputQty(e.target.value)}/>
              <br />
              {/* Creazione del Payload */}
              <button id="confirmBtn" onClick={() => {
              dispatchCart({
                type: "UPDATE_CART",
                payload: { name: selectedItem.name, quantity: parseInt(inputQty) }
              });
              setShow(false);
            }}>Conferma</button>
            </div>
          </div>
        )}

        <div id="totale">
          {addedProducts.length > 0 && <p>Totale: €{totalCart().toFixed(2)}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
