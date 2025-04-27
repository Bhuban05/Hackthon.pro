
import './App.css'
import { Login } from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (

    
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
      </BrowserRouter>
    
      
  )
}

export default App