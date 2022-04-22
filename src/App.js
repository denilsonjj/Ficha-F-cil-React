import React from 'react';
import  {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Login from "./components/pages/Login"
import  Home from "./components/pages/home"
import Contato from './components/pages/Contato';


function App() {
  return (
   <Router>
     <Routes>
    <Route  path='/' element={<Home/>} >
    </Route>
    <Route path='/Login' element ={<Login/>}>
    </Route>
    <Route path='/Contato' element ={<Contato/>}>
    </Route>
     </Routes>
   </Router>
 
  
  )
}

export default App;
