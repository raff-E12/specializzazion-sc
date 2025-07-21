import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "../src/assets/components/NavBar"
import { Route, Routes } from "react-router"
import HomePageList from './assets/pages/HomePageList'
import DetailCardInfo from "./assets/pages/DetailCardInfo"
import DetailCardVactions from './assets/pages/DetailCardVactions'
import DetailCardMedia from './assets/pages/DetailCardMedia'
import ContextCards from './assets/context/ContextCards'

function App() {
  return (
    <>
    <Navbar />
    <ContextCards>
        <Routes>
          <Route index element={<HomePageList />}/>
          <Route path='/informatica/:id' element={<DetailCardInfo />} />
          <Route path='/viaggi/:id' element={<DetailCardVactions />} />
          <Route path='/media/:id' element={<DetailCardMedia />} />
        </Routes>
    </ContextCards>
    </>
  )
}

export default App
