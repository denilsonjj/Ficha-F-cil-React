import React from 'react';
import  {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Login from "./components/pages/Login"
import Cadastro from "./components/pages/Cadastro"
import  Home from "./components/pages/home"


function App() {
  return (
   <Router>
     <Routes>
    <Route  path='/' element={<Home/>} >
    </Route>
    <Route path='/Login' element ={<Login/>}>
    </Route>
    <Route path='/Cadastro' element ={<Cadastro/>}>
    </Route>
     </Routes>
   </Router>
 
  
  )
}

export default App;
