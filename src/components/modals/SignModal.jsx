import { useState } from "react";
import { signUp, logIn, logOut } from "../config/accountsFirebase";

function SignModal({ showModal, setShowModal, title }) {
  // Declare state variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Handle sign up or sign in when form is submitted
  const handleSign = async (e) => {
    e.preventDefault();
    try {
      if (title === "Sign Up") await signUp(email, password); // Call signUp function if title is "Sign Up"
      if (title === "Sign In") await logIn(email, password); // Call logIn function if title is "Sign In"

      setShowModal(false); // Close the modal after sign up/in
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Modal container
    <div className="w-full h-full fixed flex items-center justify-center z-[100]">
      <div className="w-[20rem] h-[29rem] rounded-2xl shadow-xl bg-[#111217]/80 text-white relative flex flex-col items-center pt-10">
        {/* Close button */}
        <button
          onClick={() => setShowModal(false)}
          className=" bg-accent text-[#111217] px-4 py-2 rounded-full hover:scale-110 active:scale-90 ease-in-out duration-300 absolute top-[0.4rem] right-[0.3rem]"
        >
          X
        </button>
        {/* Sign up/in form */}
        <div className="mx-auto w-[300px] p-12">
          <h2 className="text-3xl lg:text-3xl">{title}</h2>
          <form onSubmit={handleSign}>
            <input
              onChange={(e) => setEmail(e.target.value)} // Update email state when input changes
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="mt-4 w-full bg-gray-700 rounded p-2 focus:border focus:border-accent"
            />
            <input
              onChange={(e) => setPassword(e.target.value)} // Update password state when input changes
              type="password"
              placeholder="Password"
              autoComplete="password"
              className="mt-4 w-full bg-gray-700 rounded p-2 focus:border focus:border-accent"
            />

            <input
              type="submit"
              value="Submit"
              className="mt-4 w-full bg-accent rounded p-2 text-center text-black hover:scale-90 ease-in-out duration-500 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignModal;
