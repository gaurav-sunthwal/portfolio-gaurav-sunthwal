import { useState } from "react";
import Info from "./Pages/Home/sub_HomeCompoents/Info";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
// import "./App.css";
import "./Style/mediaQueary.css";
import Home_Footer from "./Components/Home_Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Home_Footer />
      </Router>
    </>
  );
}

export default App;
