// importing react hooks
import { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const listOptions: string[] = [
    "Reset Game",
    "Change Aesthetics",
    "Read Instructions",
  ];

  // state
  const [isSideBarOpen, setSideBarStatus] = useState<Boolean>(
    window.innerWidth < 600 ? false : true
  );

  return (
    <aside
      className={isSideBarOpen ? "w-64 bg-gray-50 shadow" : "hidden"}
      aria-label="Sidebar"
      style={{ height: "77vh" }}
    >
      <div className="overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {listOptions.map((listOption, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">{listOption}</span>
              </a>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
