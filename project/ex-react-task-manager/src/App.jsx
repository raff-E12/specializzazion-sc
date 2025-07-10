import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import TaskList from "./assets/pages/TaskList"
import AddTask from "./assets/pages/AddTask"
import NavBar from './assets/components/NavBar'
import { GlobalContext } from './assets/context/GlobalContext'
import PopUp from './assets/components/PopUp'
import TaskDetails from './assets/pages/TaskDetails'

function App() {

  return (<>
  <BrowserRouter>
  <NavBar />
  <GlobalContext>
    <Routes>
      <Route index element={<TaskList />} />
      <Route path='/add' element={<AddTask />} />
      <Route path='/task/:id' element={<TaskDetails />}/>
    </Routes>
  </GlobalContext>
  </BrowserRouter>
  </>)
}

export default App
