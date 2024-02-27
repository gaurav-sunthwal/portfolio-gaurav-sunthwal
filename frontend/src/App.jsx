import { useEffect, useState } from "react";
import Info from "./Pages/Home/sub_HomeCompoents/Info";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
// import "./App.css";
import "./Style/mediaQueary.css";
import Home_Footer from "./Components/Home_Footer";
import About from "./Pages/About/About";
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Home_Footer />
      </Router>
    </>
  );
}

export default App;
