import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import styles from './styles/app.css'
import Home from './components/Home'
import { Navigate, useNavigate, Link} from 'react-router-dom';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';

const App = () => {
  

  return (

   
    
    <>
     <Router>
        
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/' element={<Login/>}/>
                <Route  path='/login'element={<Login />}/>
                </Routes>
        
    </Router>
    
  
   </>
  )
}

export default App
