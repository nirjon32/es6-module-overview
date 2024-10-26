import Search from "../search";
import "./navbar.css";
import Mode from "./Mode";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 p-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <Logo></Logo>
          <ul className="nav-font flex flex-row md:flex-row items-center gap-[40px] mt-4 md:mt-0">
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">Home</li>
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">About</li>
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">Articles</li>
            <li className="hover:text-blue-500 cursor-pointer dark:text-white">Contact</li>
          </ul>
          <div className="flex items-center gap-4">
            <Search />
            <Mode />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;