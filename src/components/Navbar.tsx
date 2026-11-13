import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { navLinks } from "../constants/navLinks";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";
import avatar from "../assets/avatar.jpeg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/slices/auth";
import { toast } from "react-toastify";
import { upperCaseMessage } from "../utils/upperCaseMessage";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = Cookies.get("token");
  const user = useAppSelector((state) => state.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    setIsOpen(false);
    setIsDropdownOpen(false);

    try {
      const response = await dispatch(logout()).unwrap();
      toast.success(upperCaseMessage(response.message));
    } catch (error: any) {
      toast.error(upperCaseMessage(error.message));
    } finally {
      navigate("/home");
    }
  };

  return (
    <header className="z-50 sticky top-0 bg-white shadow-sm flex items-center justify-between px-4 lg:px-8 max-w-360 mx-auto w-full">
      <div className="flex items-center gap-12">
        <Link
          to="/"
          className={`${!token && "lg:py-5"} py-4 text-xl font-bold text-gray-900`}
        >
          ShrinkURL
        </Link>
        <nav className={`${token && "lg:flex"} hidden items-center`}>
          <ul className="flex items-center gap-8 list-none">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `py-5 border-b-2 transition-colors flex items-center gap-2 ${
                        isActive
                          ? "text-primary font-medium border-primary"
                          : "text-gray-600 hover:text-gray-900 border-transparent"
                      }`
                    }
                  >
                    {Icon && <Icon className="text-base" />}
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`${token && "lg:flex"} w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-gray/20 hover:opacity-90 transition-all hidden items-center justify-center`}
            >
              <img
                src={avatar}
                alt="profile-image"
                className="w-full h-full object-cover"
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray/10 py-3 px-4 flex flex-col gap-3 z-50">
                <div className="flex flex-col text-left border-b border-gray/10 pb-3">
                  <span className="text-sm font-bold text-dark">
                    {user?.full_name}
                  </span>
                  <span className="text-xs text-dark-gray/60 truncate">
                    {user?.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer"
                >
                  <FiLogOut className="text-sm" />
                  <span>Logout Session</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/auth/login"
              className="text-gray-600 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition-all shadow-sm"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <button
        type="button"
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
        <nav className={`${token ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-2 list-none">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `py-2 border-b border-gray-100 flex items-center gap-2.5 ${
                        isActive
                          ? "text-primary font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      }`
                    }
                  >
                    {Icon && <Icon className="text-base" />}
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        {token ? (
          <div className="pt-2 flex flex-col gap-2 border-t border-gray/10 mt-2">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer"
            >
              <FiLogOut className="text-sm" />
              <span>Logout Session</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-2">
            <Link
              to="/auth/login"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition-all shadow-sm"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
