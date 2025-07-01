import './App.css'
import ButtonInt from './assets/ButtonInt'
import RatingStarCard from './assets/RatingStarCard'
import SliderImage from './assets/SliderImage'
import ShopProdView from './assets/ShopProdView'
import RollDiceProject from './assets/RollDiceProject'

function App() {
  return (
    <>
    <ButtonInt/>
    <br />
    <RatingStarCard/>
    <br />
    <SliderImage/>
    <br />
    <ShopProdView/>
    <br />
    <RollDiceProject/>
    <div className='p-10'>
      <p>Progetti fatti in react.</p>
    </div>
    </>
  )
}

export default App
