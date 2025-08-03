import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import ComparatorBox from '../components/ComparatorBox'

export default function DashBoard() {
  return (<>
    <NavBar />
    <Outlet />
    <ComparatorBox />
  </>)
}
