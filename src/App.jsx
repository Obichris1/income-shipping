import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./section/Hero";
import Features from "./section/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./section/About";
import Services from "./section/Features";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-[poppins]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
