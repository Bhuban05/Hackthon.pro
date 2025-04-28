
import { Login } from "./Components/Auth/Login";
import { SignUp } from "./Components/Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import SendId from "./Components/SendMoney/SendId";
import { Send } from "./Components/SendMoney/Send";
import {Navbar} from "./Components/Navbar/Navbar";
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
          <Route path="/" element={<Navbar/>} />
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
