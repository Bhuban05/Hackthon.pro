
import './App.css'
import Hero from './Components/Hero/Hero'
import Dash from './Components/Home/dash'
import Dashboard from './Components/Home/Home'
import KYCPage from './Components/Home/kyc'
import LoadMoney from './Components/Home/load'
import TransactionPage from './Components/Home/Transaction'

function App() {


  return (
    <div>
      
      <Hero/>
      <Dashboard/>
      <TransactionPage/>
      <KYCPage/>
      <LoadMoney/>
      <Dash/>
      
      </div>
  
  )
  
}


export default App