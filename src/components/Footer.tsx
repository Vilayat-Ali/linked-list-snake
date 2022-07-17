// Footer component
import moment from "moment";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 ">
      <span className="block text-sm text-gray-600 sm:text-center text-center">
        © {moment().format("YYYY")}{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Syed Vilayat Ali Rizvi™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
