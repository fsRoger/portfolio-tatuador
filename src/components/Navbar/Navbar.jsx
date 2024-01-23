import React from "react";
import DarkMode from "./DarkMode";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "PROJETOS",
    link: "/#project",
  },
  {
    id: 1,
    name: "SOBRE",
    link: "/#about",
  },
  {
    id: 1,
    name: "CONTATO",
    link: "/#contact",
  },
];
const Navbar = () => {
  return (
    <div
      className="shadow-md w-full dark:bg-black dark:text-white
    "
    >
      <div className="container py-2 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold">Lucas Reis PortFolio</span>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block text-lg font-medium py-3 hover:text-orange-700 duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
