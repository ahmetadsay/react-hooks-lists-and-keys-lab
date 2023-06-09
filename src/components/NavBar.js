import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((item, index) => (
        <a href={`#${item}`} key={index}>
          {item}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
