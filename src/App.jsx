import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white/70">
      <Header />
      <About />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
