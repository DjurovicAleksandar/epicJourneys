import React, { useEffect, useState } from "react";
import logo from "../assets/imgs/logo.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
    <Navbar className="fixed top-0 z-50 border-transparent  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 text-secondary font-medium bg-black/80 sm:bg-black/30">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex flex-col w-[3rem]">
          <img src={logo} className="mr-4 cursor-pointer" />
          <span className="font-bold mt-[-1rem] text-accent">EpicJourneys</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Button
            onClick={() => {
              window.location.href =
                "mailto:djur.aleksandar@gmail.com?subject=Epic Journeys request&body=message%20goes%20here";
            }}
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span className="text-accent font-bold">Contact</span>
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
      <MobileNav open={openNav}>
        {navList}
        <Button
          onClick={() => {
            window.location.href =
              "mailto:djur.aleksandar@gmail.com?subject=Epic Journeys request&body=message%20goes%20here";
          }}
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2"
        >
          <span className="text-accent font-bold">Contact</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}

export default NavigationBar;
