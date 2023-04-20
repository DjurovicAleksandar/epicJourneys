function Footer() {
  // define an array of categories with their title and path
  const categories = [
    ["Home", "#"],
    ["About", "#about"],
    ["Destinations", "#destinations"],
  ];

  return (
    // render the footer
    <footer className="text-black text-xs px-10 lg:px-[100px] mt-10 w-full flex items-center justify-between py-5">
      {/* render the developer's name */}
      <p>
        <span>Developed by </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://aleksandardjurovic.netlify.app/"
        >
          Aleksandar Đurović
        </a>
      </p>

      {/* render the list of categories */}
      <ul className="flex items-center gap-1 md:gap-4">
        {categories.map(([title, path], index) => {
          // render each category with a link to its path
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
