// Importing necessary components and hooks from React
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

// Importing modal components
import SignModal from "./components/modals/SignModal";
import NewItemModal from "./components/modals/NewItemModal";

function App() {
  // Using state hook to manage whether the app is loaded
  const [isLoaded, setIsLoaded] = useState(false);
  // Using state hook to manage which modal is displayed
  const [modalType, setModalType] = useState("");
  // Using state hook to manage whether the sign-in modal is displayed
  const [showModal, setShowModal] = useState(false);
  // Using state hook to manage whether the new item modal is displayed
  const [showItemModal, setShowItemModal] = useState(false);

  useEffect(() => {
    //Loading screen timeout
    setTimeout(() => setIsLoaded(true), 3000);
  }, []);

  // Return statement containing app layout with conditional rendering of modals and loading screen
  return (
    <div className="bg-white/70">
      {isLoaded ? (
        <>
          {/* Conditional rendering of sign-in modal */}
          {showModal && (
            <SignModal setShowModal={setShowModal} title={modalType} />
          )}
          {/* Conditional rendering of new item modal */}
          {showItemModal && (
            <NewItemModal setShowItemModal={setShowItemModal} />
          )}
          {/* Rendering webpage component with props */}
          <Header
            setShowItemModal={setShowItemModal}
            setModalType={setModalType}
            setShowModal={setShowModal}
          />

          <About />

          <Main />

          <Footer />
        </>
      ) : (
        <>
          {/* Rendering loading screen */}
          <div className="w-full h-screen flex flex-col bg-black/40 items-center justify-center text-4xl font-black">
            LOADING
            <HashLoader color="#8BC35A" loadingsize={400} speedMultiplier={1} />
          </div>
        </>
      )}
    </div>
  );
}

// Exporting App component
export default App;
