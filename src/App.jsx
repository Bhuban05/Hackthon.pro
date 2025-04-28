
import './App.css'
import { Login } from './Components/Auth/Login'
import { SignUp } from './Components/Auth/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
// import { Dash } from './Components/Dash/Dash'
import Calculator from './Components/Calculator/calculator'
import { Hero } from './Components/Hero/Hero'


function App() {
  return (

    <div>
      <BrowserRouter>
      <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/" element={<Navbar/>} />
    {/* <Route path="/dash" element={<Dash/>} /> */}
    <Route path="/calculator" element={<Calculator/>} />
    <Route path="/hero" element={<Hero/>} />
    <Route path="/navbar" element={<Navbar/>} />

    
</Routes>
</BrowserRouter>
      
     
      </div>
  
  )
  
}

export default App;
