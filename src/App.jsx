import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import DetailPage from "./components/Detailpage/DetailPage";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Charity from "./components/Charity /Charity";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import OurTeam from "./components/OurTeam/OurTeam";
import DonationForm from "./components/DonationForm/DonationForm";
import ContactUs from "./components/ContactUs/ContactUs";
import CardCollection from "./components/CardCollection/CardCollection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/howitwork" element={<HowItWorks />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/donation" element={<DonationForm />} />
          <Route path="/cardcollection" element={<CardCollection />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
