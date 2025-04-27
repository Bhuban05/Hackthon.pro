
import './App.css'
import { Login } from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import Hero from './Components/Hero/Hero'
import Dashboard from './Components/Home/Home'
import { Navbar } from './Components/Navbar/Navbar'

function App() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Login/>
      <SignUp/>
      <Dashboard/>
      </div>
  )
  
}


export default App