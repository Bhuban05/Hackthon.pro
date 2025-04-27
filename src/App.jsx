
import './App.css'
import { Login } from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import Hero from './Components/Hero/Hero'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/hero" element={<Hero/>} />
            <Route path="/navbar" element={<Navbar/>} />
           
           

        </Routes>
      </BrowserRouter>
  )
}

export default App