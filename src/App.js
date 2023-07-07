import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Html from "./pages/Html";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Css from "./pages/Css";
import Bootstrap from "./pages/Bootstrap";
import Javascript from "./pages/Javascript";
import FrontendReact from "./pages/FrontendReact";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HTML" element={<Html />} />
        <Route path="/CSS" element={<Css />} />
        <Route path="/BOOTSTRAP" element={<Bootstrap />} />
        <Route path="/JAVASCRIPT" element={<Javascript />} />
        <Route path="/REACT" element={<FrontendReact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
