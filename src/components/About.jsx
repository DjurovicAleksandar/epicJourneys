import React from "react";

function About() {
  return (
    <div
      id="about"
      className="container mx-auto px-10 lg:px-[100px] h-screen flex items-center justify-center gap-10 text-black"
    >
      <div className="">
        <p className="hidden lg:block about__explore text-4xl font-bold w-[20rem] uppercase border-t-[4px] border-t-primary">
          Explore the world
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block h-[3px] w-[50%] bg-primary absolute right-0 top-[-1rem]"></div>
        <div className="hidden lg:block h-[3px] w-[50%] bg-primary absolute left-0 bottom-[-1rem]"></div>
        <p className="lg:max-w-[600px] text-xs lg:text-base 2xl:text-2xl">
          Welcome to Epic Journeys, the ultimate travel destination website that
          will inspire and excite your adventurous spirit. At Epic Journeys, we
          believe that every journey is an opportunity to discover something
          new, to step outside of your comfort zone, and to create unforgettable
          memories that will last a lifetime.
          <span className="block my-5">
            Whether you are seeking a relaxing island getaway, an urban
            adventure, a thrilling mountain retreat, or a cultural immersion
            experience, we have you covered. Our team of travel experts have
            scoured the globe to spaning you the most unique and unforgettable
            travel destinations that will take your spaneath away.
          </span>
          <span>
            Our website is easy to navigate and filled with helpful travel tips
            and insider information that will help you make the most of your
            journey. So, whether you are a seasoned traveler or a first-timer,
            we invite you to join us on an epic journey that will change your
            life forever.
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
