import React from "react";
import { Button } from "./ui/Button";

const NAVBAR_HEIGHT = 80; // px

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <div
      className="text-white flex justify-between px-28 py-5 items-center fixed top-0 left-0 w-full z-50 bg-primary"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
        <div className="text-2xl font-family-fasthand">Power Projects</div>
      </a>
      <ul className="flex gap-20 text-[16px] justify-center font-family-roboto-mono items-center">
        <li className="hover:cursor-pointer hover:text-light hover:scale-110 transition-all ease-linear duration-300">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
            HOME
          </a>
        </li>
        <li className="hover:cursor-pointer hover:text-light hover:scale-110 transition-all ease-linear duration-300">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
            ABOUT US
          </a>
        </li>
        <li className="hover:cursor-pointer hover:text-light hover:scale-110 transition-all ease-linear duration-300">
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "services")}
          >
            SERVICES
          </a>
        </li>
        <li className="hover:cursor-pointer hover:text-light hover:scale-110 transition-all ease-linear duration-300">
          <a
            href="#products"
            onClick={(e) => handleSmoothScroll(e, "products")}
          >
            PRODUCTS
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
            <Button className="border-foreground rounded-xl bg-primary cursor-pointer hover:border-white border-2 text-[16px] flex justify-center items-center">
              CONTACT US
            </Button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
