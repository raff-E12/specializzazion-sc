import { useState } from 'react';
import './App.css'

function App() {

  const [addedProducts, setCart] = useState([]);
  console.log(addedProducts)

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const updateProductQuantity = (name, count) => {
    setCart(list => list.map((element) => {
      if (element.name === name) return { ...element, quantity: count }
      return element
    }))
  }

  const addToCart = (item) => {
    const item_name = item;
    const ProdFind = addedProducts.find(prod => prod.name === item_name);
    if (ProdFind) {
      updateProductQuantity(ProdFind.name, ProdFind.quantity + 1)
      return null
    }
    return setCart(items => [...items, {name: item_name, quantity: 1}])
  }

  const removeFromCart = (item) => {
    const item_name = item;
    const filterProd = addedProducts.filter(items => items.name !== item_name);
    console.log(filterProd)
    setCart(filterProd)
  }

  const totalCart = () => {
      const total_price = addedProducts.reduce((acc, prod) => {return acc + prod.quantity}, 0);
      console.log(total_price)
      return total_price
  }

  return (
    <>
      
  <div className="container">

    {/* <!-- Lista Prodotti --> */}
    <div className="section">
      <h2>Prodotti Disponibili</h2>
      {products.map((items, index) => {
        return(<>
        <div className="item" key={index}>
          <div className="item-info">
            <div className="item-name">{items.name}</div>
            <div className="item-qty">Prezzo: ${items.price.toFixed(2)}</div>
          </div>
          <a className="btn" onClick={() => addToCart(items.name)}>Aggiungi</a>
        </div>
        </>)
      })}
    </div>

    {/* <!-- Carrello --> */}
    <div className="section">
      <h2>Carrello</h2>

      {addedProducts.length === 0 ? <div className="placeholder">Il carrello è vuoto.</div> : addedProducts.map((items, index) => {
        return(<>
        <div className="item" key={index}>
          <div className="item-info">
            <div className="item-name">{items.name}</div>
            <div className="item-qty">Quantità: {items.quantity}</div>
          </div>
          <a href="#" className="btn" onClick={() => removeFromCart(items.name)}>Rimuovi</a>
        </div>
        </>)
      })}

    </div>

    <div id="totale">{addedProducts.length !== 0 ? <p>Totale: ${totalCart().toFixed(2)}</p> : <p></p>}</div>
  </div>
    </>
  )
}

export default App
