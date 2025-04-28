import "./App.css";

import { Login } from "./Components/Auth/Login";
import { SignUp } from "./Components/Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SendId from "./Components/SendMoney/SendId";
import { Send } from "./Components/SendMoney/Send";
import { Navbar } from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div>
       <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Navbar/>} />
          {/* <Route path="/hero" element={<Hero />} /> */}
          <Route path="/sendid" element={<SendId/>} />
          <Route path="/send" element={<Send/>} />
          <Route path="/send" element={<cal/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
