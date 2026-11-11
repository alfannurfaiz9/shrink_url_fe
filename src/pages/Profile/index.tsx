import { Link } from "react-router";
import { FaShieldAlt, FaPencilAlt, FaLink } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import avatar from "../../assets/avatar.jpeg";

const UserProfile = () => {
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <section className="w-full bg-slate-50/90 min-h-dvh">
      <div className="section-container py-16 flex flex-col items-center gap-6">
        <div className="w-full max-w-2xl flex flex-col gap-4">
          <span className="text-[11px] font-semibold text-dark-gray/60 tracking-wider uppercase">
            ACCOUNT MANAGEMENT
          </span>
          <div className="w-full bg-white p-8 rounded-2xl shadow-xl border border-gray/10 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-dark">Profile</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={avatar}
                  alt="Alex Thompson"
                  className="w-16 h-16 rounded-2xl object-cover border border-gray/20 shadow-sm"
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="text-lg font-bold text-dark">Alex Thompson</h2>
                <p className="text-dark-gray text-xs">Member</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-slate-50/50 border border-gray/10 text-left">
                <span className="text-[10px] font-bold tracking-wider text-dark-gray/60 uppercase">
                  EMAIL ADDRESS
                </span>
                <span className="text-xs font-semibold text-dark">
                  user@example.com
                </span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-slate-50/50 border border-gray/10 text-left">
                <span className="text-[10px] font-bold tracking-wider text-dark-gray/60 uppercase">
                  ACCOUNT TENURE
                </span>
                <span className="text-xs font-semibold text-dark">
                  Member since: January 1, 2026
                </span>
              </div>
            </div>
            <div className="w-full bg-primary p-5 rounded-2xl shadow-md flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-3 rounded-xl text-lg">
                  <FaLink />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold tracking-wider text-white/70 uppercase">
                    ACTIVE ASSETS
                  </span>
                  <span className="text-2xl font-extrabold">12</span>
                </div>
              </div>
              <Link
                to="/user/dashboard"
                className="bg-white/10 hover:bg-white/20 transition-all text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/20"
              >
                VIEW LINKS
              </Link>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center justify-between py-2 border-t border-gray/10">
                <div className="flex items-center gap-3 text-dark-gray">
                  <FaShieldAlt className="text-lg" />
                  <span className="text-xs font-medium text-dark">
                    Two-Factor Authentication
                  </span>
                </div>
                <span className="text-[10px] font-bold text-red-600 tracking-wider">
                  DISABLED
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full bg-slate-50/50 hover:bg-slate-100 transition-all text-dark border border-gray/20 py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-xs shadow-sm cursor-pointer mt-2"
            >
              <FiLogOut className="text-sm" />
              <span>Logout Session</span>
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 pt-2 text-[11px] text-dark-gray/60">
            <span>Your data is encrypted using AES-256 standards.</span>
            <Link
              to="/privacy"
              className="text-primary hover:underline font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
