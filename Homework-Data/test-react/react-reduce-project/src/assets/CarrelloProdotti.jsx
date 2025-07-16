import { useReducer } from "react";
import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Maglietta", price: 10 },
  { id: 2, name: "Pantalone", price: 20 }
];

function CartReducer(state, action) {
    switch (action.type) {
        case "ADD_CART":
        const id = action.id;
        const exists = state.find(p => p.id === id);
        if (exists) return state.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p);
        return [...state, { id: id, name: action.name, quantity: 1 }];

        case "REMOVE_CART":
        return state.filter(p => p.id !== action.id);
    
        default:
        return state
    }
}

export default function Shop() {
  const [cart, setCart] = useState([]);

  const initialState = [];
  const [StateCart, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) => {
    const exists = cart.find(p => p.id === product.id);
    if (exists) {
      setCart(cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(p => p.id !== id));
  };

  return (
    <>
     <div className="flex">
        <div className="container input">
            {initialProducts.map(product => (
            <div key={product.id}>
            <p>{product.name}</p>
            <button onClick={() => dispatch({type: "ADD_CART", name: product.name, id: product.id })}>Aggiungi</button>
            </div>
        ))}
        </div>
        <div className="container input">
            <h3>Carrello:</h3>
            {StateCart.map(item => (
                <div key={item.id}>
                <p>{item.name} x {item.quantity}</p>
                <button onClick={() => dispatch({type: "REMOVE_CART", id: item.id })}>Rimuovi</button>
                </div>
            ))}
        </div>
     </div>
    </>
  );
}
