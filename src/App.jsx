import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect } from "react";
import Home from './page/Home'
import About from './page/About'
import Breast from './page/Breast';
import Blog from './page/Blog'
import { Contact } from './page/Contact'
import Nav from './components/Nav'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);
  return (
    <>
      <Router>
      <Nav/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/breast" element={<Breast />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
