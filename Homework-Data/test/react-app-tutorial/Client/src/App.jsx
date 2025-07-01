import {useEffect, useState} from "react"
import Header from './components/Header.jsx'
import Card from './components/Card.jsx';
import Button from './Button/Button.jsx';
import ButtonGreen from './Button/Button_Green.jsx';
import Students from './components/Students.jsx';
import UserGreeting from './components/UserGreeting.jsx';
import ListAppend from './components/List.jsx';
import Componets from './components/Components.jsx';
import PickerColor from './components/Color_Picker.jsx';
import TodoList from './components/TodoList.jsx';
import ClockDigital from './components/UseState_Arg.jsx';
import StopWatch from './components/MyComponent.jsx';
import './App.css';
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ComponetsExports from './components/ComponetsExports.jsx';
import Index from './pages/Index.jsx';
import ColorPage from './pages/ColorPage.jsx';
import Cards from './pages/Cards.jsx';
import RootLayout from './layout/RootLayout.jsx';
import Increament from './pages/Increament.jsx';
import axios from "axios"

//attivazione dei seguenti componenti

function App() {
  //const list = [{id:1,name:"Apple", calories:95}, {id:2, name:"Orange", calories:35}, {id:3, name:"Lime", calories:15}, {id:4, name:"Banana", calories:52}, {id:5, name:"Limon", calories:21}]
  //const list2 = [{id:6,name:"Potatoes", calories:20}, {id:7, name:"Celery", calories:56}, {id:8, name:"Carrots", calories:19}, {id:9, name:"Corns", calories:23}, {id:10, name:"Pineapple", calories:45}]

  const [isArray, setArray] = useState([]);


  async function Api_Fetch() {
    const response = await axios.get("http://localhost:8080/api/list");
    const data = response.data;
    console.log(data);
    setArray([data]);
  }

  useEffect(()=>{ Api_Fetch() },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
         <Route index element={<Index />}/>
         <Route path='/btn' element={<Increament />}/>
         <Route path='/list' element={<ColorPage/>}/>
         <Route path='/cards' element={<Cards lists={isArray}/>}/>
      </Route>
    )
  );
  return(
    <>
    <RouterProvider router={router}/>
    {/* <ComponetsExports>
      <p>hello</p>
      <p>mario</p>
      <p>Mario</p>
      <p>Pippo</p>
      <p>Gigi</p>
    </ComponetsExports> */}
    </>
  );
}

export default App;

  //<Card></Card>
  //<Button></Button>
  //<ButtonGreen></ButtonGreen>
  //<Students name="Marco" age={30} isStudent={true}></Students>
  //<Students name="Gennaro" age={18} isStudent={false}></Students>
  //<Students name="Marco" age={30} isStudent={true}></Students>
  //<Students></Students>
  //<UserGreeting isLoggedIn={true} username="Luca Abete"/>
  //<ListAppend items={list} category="Fruits"/>
  //<ListAppend items={list2} category="Vegetables"/>
  //<Componets/>
  //<PickerColor/>