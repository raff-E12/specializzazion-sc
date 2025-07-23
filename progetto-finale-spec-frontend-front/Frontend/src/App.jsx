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

function App() {
  return (
    <>
    <ContextCards>
        <Routes>
          <Route index element={<HomePageList />}/>
          <Route path='/compare-items' element={<ComparePage />}/>

          <Route element={<DashBoard />}>
            <Route path='/informatica/:id' element={<DetailCardInfo />} />
            <Route path='/viaggi/:id' element={<DetailCardVactions />} />
            <Route path='/media/:id' element={<DetailCardMedia />} />
          </Route>
      
        </Routes>
    </ContextCards>
    </>
  )
}

export default App
