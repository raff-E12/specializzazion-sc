import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "../src/assets/components/NavBar"
import { Route, Routes } from "react-router"
import HomePageList from './assets/pages/HomePageList'
import DetailCardInfo from "./assets/pages/DetailCardInfo"
import DetailCardVactions from './assets/pages/DetailCardVactions'
import DetailCardMedia from './assets/pages/DetailCardMedia'
import ContextCards from './assets/context/ContextGlobal'
import ComparePage from './assets/pages/ComparePage'
import DashBoard from './assets/layout/DashBoard'
import FavoritePage from './assets/pages/FavoritePage'
import NotFoundPage from './assets/pages/404Page'

function App() {
  return (
    <>
    <ContextCards>
        <Routes>
         
          <Route element={<DashBoard/>}>
            <Route path={"*"} element={<NotFoundPage />}/>
            <Route index element={<HomePageList />}/>
            <Route path='/compare-items' element={<ComparePage />}/>
            <Route  path='/favorites' element={<FavoritePage />}/>
          </Route>

          <Route path="/items" element={<DashBoard />}>
            {/* <Route path='informatica/:id' element={<DetailCardInfo />} />
            <Route path='viaggi/:id' element={<DetailCardVactions />} /> */}
            <Route path='media/:id' element={<DetailCardMedia />} />
          </Route>
      
        </Routes>
    </ContextCards>
    </>
  )
}

export default App
