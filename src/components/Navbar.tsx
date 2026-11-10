import { useState } from "react";
import { Link, NavLink } from "react-router";
import  {navLinks}  from "../constants/navLinks"; 
import { CgClose, CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm flex items-center justify-between px-4 lg:px-8 max-w-360 mx-auto w-full">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-xl font-bold text-gray-900 lg:py-0 py-4">
          ShrinkURL
        </Link>
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `py-4 border-b-2 transition-colors block ${
                      isActive
                        ? "text-primary font-medium border-primary"
                        : "text-gray-600 hover:text-gray-900 border-transparent"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <Link to="/auth/login" className="text-gray-600 hover:text-gray-900">
          Login
        </Link>
        <Link
          to="/auth/logout"
          className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition-all shadow-sm"
        >
          Logout
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-gray-800 p-2 text-xl focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <CgClose /> : <CgMenuRight />}
      </button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-white px-6 py-4 flex-col gap-2 lg:hidden shadow-lg border-t border-gray-100 z-50`}
      >
        <nav>
          <ul className="flex flex-col gap-2 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `py-2 border-b border-gray-100 block ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between pt-2">
          <Link
            to="/auth/login"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Login
          </Link>
          <Link
            to="/auth/logout"
            className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition-all shadow-sm"
          >
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;