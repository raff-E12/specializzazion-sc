import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import TaskList from "./assets/pages/TaskList"
import AddTask from "./assets/pages/AddTask"
import NavBar from './assets/components/NavBar'

function App() {

  return (<>
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route index element={<TaskList />} />
      <Route path='/add' element={<AddTask />} />
    </Routes>
  </BrowserRouter>
  </>)
}

export default App
