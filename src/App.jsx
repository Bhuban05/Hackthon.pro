
import './App.css'
import { Login } from './Components/Auth/Login'
import { SignUp } from './Components/Auth/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { Dash } from './Components/Dash/Dash'


function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/" element={<Navbar/>} />
    <Route path="/dash" element={<Dash/>} />
</Routes>
</BrowserRouter>
      
     
      </div>
  )
}

export default App