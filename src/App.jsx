import "./App.css";

import { Login } from "./Components/Auth/Login";
import { SignUp } from "./Components/Auth/SignUp";
import Calculator from "./Components/Calculator/calculator";
import { Hero } from "./Components/Hero/Hero";
import SendId from "./Components/SendMoney/SendId";
import { Send } from "./Components/SendMoney/Send";
import {Navbar} from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import LoadM from "./Components/Load/LoadM";

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Navbar/>}/>
          <Route path="/hero" element={<Hero />} />
          <Route path="/sendid" element={<SendId/>} />
          <Route path="/send" element={<Send/>} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/loadm" element={<LoadM />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
