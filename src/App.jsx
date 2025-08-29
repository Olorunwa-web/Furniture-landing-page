import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Home from './components/Home'


function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path = '/' element = {<Navbar/>}>
            <Route index element = {<Home/>}/>
         </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
