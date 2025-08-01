import './App.css'
import { Route, Routes } from 'react-router'
import { ContextGlobal } from "../src/assets/context/ContextGlobal"
import HomePageList from './assets/pages/HomePageList'
import DashBoard from './assets/layout/DashBoard'
import NotFoundPage from './assets/pages/NotFoundPage'
import DetailCardInfo from './assets/pages/DetailCardInfo'
import DatailCardMedia from './assets/pages/DetailCardMedia'
import DetailCardVactions from './assets/pages/DetailCardVactions'

function App() {

  return (
    <>
    <ContextGlobal>
      <Routes>

         <Route element={<DashBoard/>}>
            <Route path={"*"} element={<NotFoundPage />}/>
            <Route index element={<HomePageList />}/>
            {/* <Route path='/compare-items' element={<ComparePage />}/>
            <Route  path='/favorites' element={<FavoritePage />}/> */}
          </Route>
        
          <Route path="/items" element={<DashBoard />}>
            <Route path='informatica/:id' element={<DetailCardInfo />} />
            <Route path='viaggi/:id' element={<DetailCardVactions />} />
            <Route path='media/:id' element={<DatailCardMedia />} />
          </Route>

      </Routes>
    </ContextGlobal>
    </>
  )
}

export default App
