import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
//Modals
import SignModal from "./components/modals/SignModal";
import NewItemModal from "./components/modals/NewItemModal";

import { auth } from "./components/config/firebase";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [modalType, setModalType] = useState("");

  //Modal show/hide
  const [showModal, setShowModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(true);

  return (
    <div className="bg-white/70">
      {isLoaded ? (
        <>
          {showModal && (
            <SignModal setShowModal={setShowModal} title={modalType} />
          )}

          {showItemModal && (
            <NewItemModal setShowItemModal={setShowItemModal} />
          )}
          <Header setModalType={setModalType} setShowModal={setShowModal} />
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
