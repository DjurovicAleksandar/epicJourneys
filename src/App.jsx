import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoaded(true);
    });
  }, []);
  return (
    <div className="bg-white/70">
      {isLoaded ? (
        <>
          <Header />
          <About />
          <Main />
          <Footer />
        </>
      ) : (
        <>
          <div className="w-full h-screen flex items-center justify-center text-4xl">
            LOADING
          </div>
        </>
      )}
    </div>
  );
}

export default App;
