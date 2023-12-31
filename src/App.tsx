import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Zurich } from "./pages/Kandidierende/zurich";
import { Aargau } from "./pages/Kandidierende/Aargau";
import { Bern } from "./pages/Kandidierende/Bern";
import { NationalDonations } from "./pages/Kandidierende/NationalDonations";
import { BaselStadt } from "./pages/Kandidierende/Basel-Stadt";
import { Luzern } from "./pages/Kandidierende/Luzern";
import { Solothurn } from "./pages/Kandidierende/Solothurn";
import { StGallen } from "./pages/Kandidierende/St.Gallen";
import { Geneve } from "./pages/Kandidierende/Geneve";
import { Valais } from "./pages/Kandidierende/Valais";

function App() {
  const hostName = window.location.hostname;
  const isFrench = hostName === "vote-queer.ch";

  useEffect(() => {
    if (isFrench) {
      document.title = "PS Queer";
    }
  }, [isFrench]);

  return (
    <BrowserRouter>
      <Navbar isFrench={isFrench} />
      <Routes>
        <Route path="/" element={<Home isFrench={isFrench} />} />
        <Route path="/aargau" element={<Aargau />} />
        <Route path="/basel-stadt" element={<BaselStadt />} />
        <Route path="/bern" element={<Bern />} />
        <Route path="/geneve" element={<Geneve />} />
        <Route path="/luzern" element={<Luzern />} />
        <Route path="/solothurn" element={<Solothurn />} />
        <Route path="/stgallen" element={<StGallen />} />
        <Route path="/valais" element={<Valais />} />
        <Route path="/zuerich" element={<Zurich />} />
        <Route
          path={isFrench ? "/donation" : "/spenden"}
          element={<NationalDonations isFrench={isFrench} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
