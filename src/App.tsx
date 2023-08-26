import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Forderungen } from "./pages/Forderungen";
import { Footer } from "./components/Footer";
import { Zurich } from "./pages/Kandidierende/zurich";
import { Aargau } from "./pages/Kandidierende/Aargau";
import { Bern } from "./pages/Kandidierende/Bern";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forderungen" element={<Forderungen />} />
        <Route path="/aargau" element={<Aargau />} />
        <Route path="/bern" element={<Bern />} />
        <Route path="/zuerich" element={<Zurich />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
