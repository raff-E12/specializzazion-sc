import React, { useEffect, useState } from 'react'

export default function SliderImage() {
    const [images, setImages] = useState([]);
    const [currentError, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isCount, setCount] = useState(0);

    function handleClickRight(){
        if (isCount > 0) {
        const setClick = isCount - 1;
        setCount(setClick);
        // console.log('Right',setClick);
        }
    }

    function handleClickNext(){
       if (isCount < 9) {
        const setClick = isCount + 1;
        setCount(setClick);
        // console.log('Next',setClick);
       }
    }

    async function fecthImages(){
        try {
         setLoading(true);
         const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`);
         const data = await response.json();
         console.log(data);

          if (data) {
             setImages(data);
             setLoading(false);
          }

        } catch (error) {
          setError(error.message);
          setLoading(false);
          //console.log(error);
         }
    }

    useEffect(()=>{
        fecthImages();
    },[]);

     if (isLoading) {
         return(<>
         <div className='message-api'><p>Loading del API, Attenda l'attesa...</p></div>
       </>)
     }

     //currentError non deve corrispondere a null

     if (currentError !== null) {
       return(<>
         <div  className='message-api'><p>Error dell'API = Error {currentError}.</p></div>
         </>)
     }

     //isCount === index = il contatore deve essere uguale per l'index

  return (
    <section className='box-slider'>
        <div className='slider'>
            <div className='box-img-slide'>
               <div className='img-list'>
               {images && images.length ? images.map((imagesItems, index)=>{
                    return(
                        <img src={imagesItems.download_url} alt="images" key={imagesItems.id} className={isCount === index ? 'img-show' : 'img-unshow'}/>
                    )
                }):null}
               </div>
            </div>
            <div className='box-btn-slide'>
                <button onClick={()=> handleClickRight()}><i class="fa-solid fa-circle-arrow-left"></i></button>
                <button onClick={()=> handleClickNext()}><i class="fa-solid fa-circle-arrow-right"></i></button>
            </div>
            <div className='currect-points'>
               {images && images.length ? images.map((_,index)=>(
                   <button key={index} className={isCount === index ? 'circle-index' : 'circle-index inactive'} onClick={()=>setCount(index)}></button>
                )):null}
            </div>
        </div>
    </section>
  )
}
