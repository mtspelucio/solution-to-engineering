import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar";
import Initial from "./components/Initial";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="App" >
      <Navbar />
      <Initial />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}