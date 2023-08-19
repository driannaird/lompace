import logo from "../assets/svg_images/logo.svg";
import hamburger from "../assets/svg_images/hamburger.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="order-1 sm:order-2 lg:order-1">
        <img src={logo} alt="logo" />
      </div>
      <div className="hidden sm:flex gap-2 order-2 sm:order-3 lg:order-3">
        <button className="text-sm font-medium bg-white text-red-500 py-2 px-4 rounded-full lg:text-base">
          Sign In
        </button>
        <button className="text-sm font-medium text-white py-2 px-4 border-2 rounded-full lg:text-base">
          Sign Up
        </button>
      </div>
      <div className="hidden lg:block lg:order-2">
        <ul className="flex items-center justify-center gap-4 text-base">
          <li className="font-medium text-white py-2 px-4 border-2 rounded-full">
            Home
          </li>
          <li className="font-medium text-white py-2 px-4">About</li>
          <li className="font-medium text-white py-2 px-4">Contact</li>
          <li className="font-medium text-white py-2 px-4">Service</li>
        </ul>
      </div>
      <div className="order-3 sm:order-1 lg:hidden">
        <button>
          <img src={hamburger} alt="hamburger" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
