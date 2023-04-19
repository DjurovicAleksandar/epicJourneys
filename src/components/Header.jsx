import { useEffect, useState } from "react";
import logo from "../assets/imgs/logo.png";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import NavigationBar from "./NavigationBar";

import video__1 from "../assets/videos/video__1.mp4";
import video__2 from "../assets/videos/video__2.mp4";
import video__3 from "../assets/videos/video__3.mp4";
import video__4 from "../assets/videos/video__4.mp4";
import video__5 from "../assets/videos/video__5.mp4";

function Header({ isLoaded, setIsLoaded }) {
  const videoArr = [video__1, video__2, video__3, video__4, video__5];
  const socials = [
    [<BsLinkedin />, "https://www.linkedin.com/in/djuraleksandar/"],
    [<BsInstagram />, "https://www.instagram.com/nekultivisan/"],
    [<BsGithub />, "https://github.com/DjurovicAleksandar?tab=repositories"],
  ];

  const headerContent = [
    [
      "Sun, Sand, and Surf:",
      "Island Getaway",
      "Indulge in pure bliss with an island getaway. Relax on pristine sandy beaches, swim in crystal-clear turquoise waters, and bask in the warm tropical sun. Immerse yourself in the local culture, savor delicious cuisine, and create unforgettable moments in paradise.",
    ],
    [
      "Find Serenity:",
      "Mountatin Retreat",
      "Escape to the tranquil beauty of the mountains with a serene mountain retreat. Breathe in crisp alpine air, hike through majestic trails, and marvel at panoramic vistas. Unwind in cozy lodges, immerse in local culture, and experience the peace and serenity of the mountains.",
    ],
    [
      "Immerse in Rich Heritage:",
      "Cultural Immersion",
      "Dive into the fascinating world of culture with a immersive travel experience. Immerse in local traditions, visit historical landmarks, and engage with local communities. Discover the rich heritage, customs, and cuisine of a destination, and gain a deeper understanding of its people and history.",
    ],
    [
      "City Adventure:",
      "Urban Excursion",
      "Immerse yourself in the vibrant energy of the city with an urban excursion. Explore bustling streets, iconic landmarks, and trendy neighborhoods. Immerse yourself in the local culture, sample diverse cuisines, and experience the dynamic lifestyle of a city dweller.",
    ],
    [
      "Hit The Road:",
      "Epic Road Trip",
      "Embark on an epic road trip and explore the world at your own pace. Drive through breathtaking landscapes, discover hidden gems, and create lasting memories along the open road. Unleash your sense of adventure and experience the ultimate freedom of a road trip.",
    ],
  ];

  return (
    <header className="h-screen w-full text-white relative">
      <NavigationBar />

      <section className="relative w-full h-full">
        {videoArr.map((videoSrc, i) => {
          return (
            <video
              onLoad={() => {
                i === 4 && setIsLoaded(true);
              }}
              className={`header__video video__${i} ${i === 0 && "active"}`}
              src={videoSrc}
              autoPlay
              muted
              loop
            />
          );
        })}

        <div className="absolute z-40 inset-0  px-10 lg:px-[100px] py-[200px] bg-blue-900/30">
          {/* content */}
          <div className="sm:w-1/2 2xl:mt-20">
            {headerContent.map(([title1, title2, paragraph], i) => {
              return (
                <div
                  className={`header__content-${i} header__text hidden 2xl:mb-52 h-[18rem] md:h-[20rem] ${
                    i == 0 && "active"
                  }`}
                >
                  <h1 className="uppercase font-bold text-2xl sm:text-4xl 2xl:text-7xl lg:tracking-widest lg:leading-10 mb-10">
                    {title1}
                    <br /> <span className="font-medium">{title2}</span>
                  </h1>
                  <p className="text-xs md:text-base lg:text-base 2xl:text-2xl ">
                    {paragraph}
                  </p>
                </div>
              );
            })}
            <a
              href="#destinations"
              className="bg-white font-bold text-primary px-4 py-2 2xl:px-8 2xl:py-4 2xl:text-xl rounded-lg button__effects"
            >
              Explore
            </a>
          </div>
          {/* Social icons */}
          <ul className="absolute top-1/2 right-10 hidden sm:block text-xs sm:text-base md:text-xl 2xl:text-4xl">
            {socials.map(([icon, path], i) => {
              return (
                <li key={i} className="mb-10 button__effects">
                  <a href={path} target="_blank">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* Slider navigation*/}

          <ul className="z-50 flex items-center justify-between w-[4rem] absolute bottom-10 left-1/2">
            {videoArr.map((_, i) => {
              return (
                <li
                  onClick={(e) => {
                    //Selectin all slider buttons
                    const sliderButton =
                      document.querySelectorAll(".slider__button");
                    //Selectin all slider videos
                    const headerVideo =
                      document.querySelectorAll(".header__video");
                    //Selectin all header content text
                    const headerText =
                      document.querySelectorAll(".header__text");

                    //Remove class active from slider button
                    sliderButton.forEach((btn) => {
                      btn.classList.remove("active");
                    });
                    //Removing class active from slider video
                    headerVideo.forEach((headerVideo) => {
                      headerVideo.classList.remove("active");
                    });
                    //Removing class active from header text
                    headerText.forEach((headerContent) => {
                      headerContent.classList.remove("active");
                    });

                    //Setting ACTIVE class on a slider icon
                    e.target.classList.add("active");
                    //Setting ACTIVE class on a header video
                    document
                      .querySelector(`.video__${i}`)
                      .classList.add("active");
                    //Setting ACTIVE class on a header text
                    document
                      .querySelector(`.header__content-${i}`)
                      .classList.add("active");
                  }}
                  className={`slider__button bg-white w-2 h-2 rounded-full button__effects ${
                    i === 0 && "active"
                  }`}
                >
                  &nbsp;
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </header>
  );
}
export default Header;
