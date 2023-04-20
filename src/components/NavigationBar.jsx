import React, { useEffect, useState } from "react";
import logo from "../assets/imgs/logo.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { auth } from "./config/firebase";
import { logOut } from "./config/accountsFirebase";

function NavigationBar({ setModalType, setShowModal, setShowItemModal }) {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#destinations" className="flex items-center">
          Destinations
        </a>
      </Typography>
    </ul>
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar className="absolute top-0 z-50 border-transparent  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 text-accent font-medium bg-black/70">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex flex-col w-[3rem]">
          <img src={logo} className="mr-4 cursor-pointer" />
          <span className="font-bold mt-[-1rem] text-accent">EpicJourneys</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {auth.currentUser?.email === "admin@epicjourneys.com" && (
            <Button
              onClick={(e) => setShowItemModal(true)}
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span className="text-accent font-bold">Add destination</span>
            </Button>
          )}

          <Button
            onClick={() => {
              if (auth.currentUser) {
                logOut(auth);
                location.reload();
              } else {
                setModalType("Sign In");
                setShowModal(true);
              }
            }}
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span className="text-accent font-bold">
              {auth.currentUser ? "Log out" : "Log in"}
            </span>
          </Button>
          <Button
            onClick={() => {
              alert(
                "Welcome to website! Website is built using React, Tailwind, Vite, and Firebase, including Firestore and Storage, as well as the restCountries API. As an admin, you can log in using the login button and access the option to add a new destination. * Login email : admin@epicjourneys.com; *Login password: adminadmin"
              );
            }}
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span className="text-secondary font-bold">Help</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav
        className={`hidden ${openNav && "inline-block"}`}
        open={openNav}
      >
        {navList}
        {auth.currentUser?.email === "admin@epicjourneys.com" && (
          <Button
            onClick={() => setShowModal(true)}
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
          >
            <span className="text-accent font-bold">Add destinaion</span>
          </Button>
        )}

        <Button
          onClick={() => {
            if (auth.currentUser) {
              logOut(auth);
              location.reload();
            } else {
              setModalType("Sign In");
              setShowModal(true);
            }
          }}
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2"
        >
          <span className="text-accent font-bold">
            {auth.currentUser ? "Log out" : "Log in"}
          </span>
        </Button>
        <Button
          onClick={() => {
            alert(
              "Welcome to website! Website is built using React, Tailwind, Vite, and Firebase, including Firestore and Storage, as well as the restCountries API. As an admin, you can log in using the login button and access the option to add a new destination. * Login email : admin@epicjourneys.com; *Login password: adminadmin"
            );
          }}
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2"
        >
          <span className="text-secondary font-bold">Help</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}

export default NavigationBar;
