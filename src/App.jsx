
import './App.css'

import { Login } from './Components/Auth/Login'
import { SignUp } from './Components/Auth/SignUp'
import { Hero } from './Components/Hero/Hero'
import { Navbar } from './Components/Navbar/Navbar'
import Send from './Components/SendMoney/Send'
import SendId from './Components/SendMoney/SendId'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/" element={<Navbar/>} />
    <Route path="/hero" element={<Hero/>} />

  
    <Route path="/send" element={<Send/>} />
    <Route path="/sendid" element={<SendId/>} />
</Routes>
</BrowserRouter>
      
    
     
     
      </div>
  )
}

export default App