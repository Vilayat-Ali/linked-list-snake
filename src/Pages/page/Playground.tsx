// importing components
import Sidebar from "../../components/Sidebar/PlayZoneSideBar";
import PlayZone from "../../components/PlayZone";
import { Fragment } from "react";

type Props = {};

const Playground = (props: Props) => {
  return (
    <Fragment>
      {window.innerWidth > 700 ? (
        <div className="flex">
          <div className="d-flex">
            <Sidebar />
          </div>
          <div className="d-flex">
            <PlayZone />
          </div>
        </div>
      ) : (
        <section
          className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100"
          style={{ width: "100vw", height: "86vh" }}
        >
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <p className="text-3xl">
              Please use a desktop device to view playground.
            </p>
            <a
              rel="noopener noreferrer"
              href="/home"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Revert back to home
            </a>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Playground;
