
import './App.css'
import Hero from './Components/Hero/Hero'
import Dashboard from './Components/Home/Home'
import KYCPage from './Components/Home/kyc'
import TransactionPage from './Components/Home/Transaction'

function App() {


  return (
    <div>
      
      <Hero/>
      <Login/>
      <SignUp/>
      <Dashboard/>
      <TransactionPage/>
      <KYCPage/>
      
      </div>
  
  )
  
}


export default App