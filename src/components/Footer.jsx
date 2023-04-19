import React from "react";

function Footer() {
  const categories = [
    ["Home", "#"],
    ["About", "#about"],
    ["Destinations", "#destionations"],
  ];

  return (
    <footer className="text-black text-xs px-10 lg:px-[100px] mt-10 w-full flex items-center justify-between py-5">
      <p className="">
        <span className="">Developed by </span>

        <a target="_blank" href="https://aleksandardjurovic.netlify.app/">
          Aleksandar Đurović
        </a>
      </p>

      <ul className="flex items-center  gap-1 md:gap-4">
        {categories.map(([title, path], index) => {
          return (
            <li
              key={index}
              className="active:text-blue-500 cursor-pointer hover:scale-110"
            >
              <a href={path}>{title}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
