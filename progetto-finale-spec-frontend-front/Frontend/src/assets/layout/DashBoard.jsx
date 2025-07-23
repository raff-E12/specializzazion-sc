import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import NavBar from '../components/NavBar'
import ComparatorBox from '../components/ComparatorBox'

export default function DashBoard() {
  return (<>
   <NavBar/>
    <Outlet />
   <ComparatorBox/>
  </>)
}
