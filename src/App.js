import React from "react";

import Navbar from "./components/Navbar";
import Initial from "./components/Initial";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Initial />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}