import { useState } from "react";
import { signUp, logIn, logOut } from "../config/accountsFirebase";

function SignModal({ showModal, setShowModal, title }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSign = async (e) => {
    e.preventDefault();
    try {
      if (title === "Sign Up") await signUp(email, password);
      if (title === "Sign In") await logIn(email, password);

      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full fixed flex items-center justify-center z-[100]">
      <div className="w-[20rem] h-[29rem] rounded-2xl shadow-xl bg-[#111217]/60 text-white relative flex flex-col items-center pt-10">
        <button
          onClick={(e) => setShowModal(false)}
          className=" bg-accent text-[#111217] px-4 py-2 rounded-full hover:scale-110 active:scale-90 ease-in-out duration-300 absolute top-[0.4rem] right-[0.3rem]"
        >
          X
        </button>
        <div className="mx-auto w-[300px] p-12">
          <h2 className="text-3xl lg:text-3xl">{title}</h2>
          <form onSubmit={handleSign}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="mt-4 w-full bg-gray-700 rounded p-2 focus:border focus:border-accent"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
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
