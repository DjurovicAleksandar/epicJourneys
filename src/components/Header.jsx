import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import NavigationBar from "./NavigationBar";

import video__1 from "../assets/videos/video__2.mp4";
import video__2 from "../assets/videos/video__4.mp4";
import video__3 from "../assets/videos/video__5.mp4";
import { useEffect, useState } from "react";

function Header({ setModalType, setShowModal, setShowItemModal }) {
  //State variable
  const [isActive, setIsActive] = useState(0);
  // Declared an array of video assets
  // const videoArr = [video__1, video__2, video__3];
  const videoArr = [
    {
      src: video__1,
      className: `header__video video__1 ${isActive === 0 && "active"}`,
    },
    {
      src: video__2,
      className: `header__video video__2 ${isActive === 1 && "active"}`,
    },
    {
      src: video__3,
      className: `header__video video__3 ${isActive === 2 && "active"}`,
    },
  ];
  // Declared an array of social media links and their icons
  const socials = [
    [<BsLinkedin />, "https://www.linkedin.com/in/djuraleksandar/"],
    [<BsInstagram />, "https://www.instagram.com/nekultivisan/"],
    [<BsGithub />, "https://github.com/DjurovicAleksandar?tab=repositories"],
  ];

  const sliderLogicHandler = (e, i) => {
    if (isActive !== i) {
      setIsActive(i);
    }
  };

  // Declared an array of header content text
  const headerContent = [
    [
      "Find Serenity:",
      "Mountatin Retreat",
      "Escape to the tranquil beauty of the mountains with a serene mountain retreat. Breathe in crisp alpine air, hike through majestic trails, and marvel at panoramic vistas. Unwind in cozy lodges, immerse in local culture, and experience the peace and serenity of the mountains.",
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

  // useEffect(() => {
  //   setIsActive(0);
  // }, []);

  return (
    <header className="h-screen w-full text-white relative">
      {/* Render the navigation bar */}
      <NavigationBar
        setShowItemModal={setShowItemModal}
        setModalType={setModalType}
        setShowModal={setShowModal}
      />
      <section className="relative w-full h-full">
        {videoArr.map((video, i) => {
          return (
            <video
              key={i}
              className={video.className}
              src={video.src}
              autoPlay={isActive === i}
              muted
              loop
            />
          );
        })}

        <div className="absolute z-40 inset-0  px-10  lg:px-[100px] py-[100px] bg-gradient-to-r from-black">
          {/* content */}
          <div className="sm:w-1/2  2xl:mt-20">
            {headerContent.map(([title1, title2, paragraph], i) => {
              return (
                <div
                  key={i}
                  className={`header__content-${i} header__text hidden 2xl:mb-52 h-[18rem] sm:h-[20rem] ${
                    isActive === i && "active"
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
            <div className="flex items-center gap-4 mt-5 sm:mt-16">
              <a
                href="#destinations"
                className="block border font-bold text-accent px-4 py-2 2xl:px-8 2xl:py-4 2xl:text-xl rounded-lg button__effects"
              >
                Explore
              </a>
              <button
                className="block border font-bold text-accent px-4 py-2 2xl:px-8 2xl:py-4 2xl:text-xl rounded-lg button__effects"
                onClick={() => {
                  window.location.href =
                    "mailto:djur.aleksandar@gmail.com?subject=Epic Journeys request&body=message%20goes%20here";
                }}
              >
                Contact
              </button>
            </div>
          </div>
          {/* Social icons */}
          <ul className="absolute top-1/2 right-10 hidden sm:block text-base md:text-2xl 2xl:text-4xl">
            {socials.map(([icon, path], i) => {
              return (
                <li key={i} className="mb-10 button__effects text-white">
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
                  key={i}
                  onClick={(e) => sliderLogicHandler(e, i)}
                  className={`slider__button bg-white w-2 h-2 rounded-full button__effects ${
                    isActive === i && "active"
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
