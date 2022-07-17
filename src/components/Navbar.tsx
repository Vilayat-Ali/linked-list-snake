// importing assets
import { Fragment, useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  // toggle custom hook
  const [navState, ToggleNav] = useState<Boolean>(false);
  const location = useLocation();
  // list of links
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "play",
      href: "/play",
    },
    {
      title: "dev",
      href: "/dev",
    },
  ];
  return (
    <Fragment>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow pr-2">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={Logo} className="mr-3 h-14 sm:h-16" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden focus:outline-none dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => ToggleNav(!navState)}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={navState ? "w-6 h-6" : "hidden w-6 h-6"}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              !navState
                ? "hidden w-full md:block md:w-auto"
                : " w-full md:block md:w-auto"
            }
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {links.map((link) => (
                <Link to={link.href}>
                  <li key={link.title}>
                    <a
                      className={
                        location.pathname === link.href
                          ? "block text-xl underline py-2 pr-4 pl-3 text-gray-700 md:text-blue-700 md:p-0"
                          : "block text-xl py-2 pr-4 pl-3 text-gray-700 md:bg-transparent md:text-gray-700 md:p-0"
                      }
                      aria-current="page"
                    >
                      {link.title}
                    </a>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
