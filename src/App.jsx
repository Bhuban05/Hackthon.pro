
import { Login } from "./Components/Auth/Login";
import { SignUp } from "./Components/Auth/SignUp";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SendId from "./Components/SendMoney/SendId";
import { Send } from "./Components/SendMoney/Send";

import { ToastContainer, toast } from 'react-toastify';
import Calculator from "./Components/Calculator/calculator";
import Dash from "./Components/Dash/Dash";


function App() {
  return (

    <div>
       <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/dash" element={<Dash/>} />
         <Route path="/sendid" element={<SendId/>} />
          <Route path="/send" element={<Send/>} />
        
         
        </Routes>
      </BrowserRouter>
    </div>
  );

  
  
}

export default App;
