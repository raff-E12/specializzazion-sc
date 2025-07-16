import React, { useEffect, useState } from 'react'

export default function ShopProdView() {
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [isDisable, setDisable] = useState(false);

    //Dummyjson = serve a creare un file json fittizio per qualsiasi tipo di scopo dimostrativo

    async function FetchingProd(){
        //tenere d'occhio la sezione limit del url in fetch.
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count}`);
            const data = await response.json();
            setLoading(true);
            if (data && data.products && data.products.length) {
            //lo spread operator serve ad aggiungere i valori di array rispettando i valori esistenti
                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }

    // uso per il fetch
    useEffect(()=>{
      FetchingProd()
    },[count])

    // uso di aggiornamento in base alla variabile
    useEffect(()=>{
        if (products && products.length === 60) {
            setDisable(true);
        }
    }, [products]);

    if (isLoading) {
        return(
            <>
            <div className='message-ap'>Loading data, Please wait.</div>
            </>
        )
    }

    console.log(products);

  return (
    <section className='prod-sc'>
        <div className='list-prod'>
            {products && products.length ? products.map((items) => {
                 return(
                    <>
                    <div className='prod' key={items.id}>
                        <div className='img-prod'>
                        <img src={items.thumbnail} alt="logo-shop"/>
                        </div>
                        <div>
                            <div className='text-prod'>
                            <h4>{items.title}</h4>
                            <p>{items.brand}</p>
                            </div>
                            <div className='price'>
                                <p>${items.price}</p>
                            </div>
                        </div>
                    </div>
                    </>
                 )
            }):null}
        </div>
        <div className='final-msg-prod'>
        <button disabled={isDisable} className='prod-btn' onClick={()=>setCount(count + 1)}>Load More Products</button>
        {isDisable ? <p>You have reached to 60 products.</p> : null}
        </div>
    </section>
  )
}
