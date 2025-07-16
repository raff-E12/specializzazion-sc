import React, { useState } from 'react'

//task.filter((_, i) => i !== index): questo elemento '_' serve ad ignorare quel valore all'interno dell'array appartenente a un singolo valore.

//'${index <= (hover || rating)'= questa espressione serve confrontare il valore di
// ogni singolo elemento con la variabile 'index', quindi per ogni elemento distribuito e costruito 
// sulla base dell'array di oggetti tende selezionare l'elemento partendo dalle due variabili, in maniera schmatica sarebbe:
// 3>1 o hover > rating.

//index <= hover ? 'hover-active ' : (index <= rating ? 'rating-active' : 'inactive')}`}: -- schema ---: 
// 4 <= 3 (true) o 2 <= 4 --> 2 <= 5 (true) o (false) -> (false) tra hover o false.

export default function RatingStarCard() {
  const [Stars, setStars] = useState([
    {
        class: 'fa-solid fa-star',
        id: 1
    },
    {
        class: 'fa-solid fa-star',
        id: 2
    },
    {
        class: 'fa-solid fa-star',
        id: 3
    },
    {
        class: 'fa-solid fa-star',
        id: 4
    }, 
    {
        class: 'fa-solid fa-star',
        id: 5
    },
    {
        class: 'fa-solid fa-star',
        id: 6
    },
    {
        class: 'fa-solid fa-star',
        id: 7
    }
  ]);
  const [rating, SetRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    //console.log(getCurrentIndex);
    SetRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    //console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    //console.log(rating);
    setHover(rating);
  }

  return (
    <section className='card-sc'>
        <div className='cards'>
            <div className='card-img'>
              <img src="public/img/img-1.png" alt="img-1"/>
            </div>
            <div className='text-card'>
               <div className='text-cd'>
                  <h4>Hotel Di Grande Gusto</h4>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsum consequatur fugiat laborum vero facilis sint commodi 
                    autem eum perspiciatis esse doloribus, natus eius impedit 
                    temporibus soluta quasi? Incidunt, exercitationem unde?</p>
               </div>
                <div className='rate-sc'>
                 {
                   Stars.map((element,index)=>{
                    index += 1;
                    1;
                    return(
                     <i className={`${element.class} ${index <= hover ? 'hover-active ' : (index <= rating ? 'rating-active' : 'inactive')}`} key={element.id} onClick={()=> handleClick(index)} onMouseMove={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)}></i>
                    )
                   })
                 }
                </div>
            </div>
        </div>
    </section>
  )
}
