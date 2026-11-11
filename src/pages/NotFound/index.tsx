import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { IoLinkOutline, IoWarningOutline } from "react-icons/io5";
import { MdOutlineAnalytics, MdCode } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="min-h-dvh py-16 w-full bg-slate-50/90 flex flex-col items-center justify-center p-4 gap-12">
      <div className="section-container flex flex-col items-center text-center gap-8">
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary text-4xl">
            <IoLinkOutline />
          </div>
          <div className="absolute -top-1 -right-1 bg-primary text-white p-2 rounded-xl text-xs shadow-md">
            <IoWarningOutline />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            404
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            Page Not Found
          </h2>
          <p className="text-dark-gray text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist. It may have been moved,
            deleted, or the link might be broken.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 w-full">
          <Link
            to="/user/dashboard"
            className="bg-primary text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md cursor-pointer text-sm"
          >
            <FaArrowLeft className="text-xs" />
            <span>Go to Dashboard</span>
          </Link>
          <button
            type="button"
            className="bg-white text-dark border border-gray/20 px-6 py-3 rounded-xl font-medium hover:opacity-80 transition-all shadow-sm cursor-pointer text-sm"
          >
            Report an Issue
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-4">
          <div className="flex flex-col items-start p-4 bg-white rounded-2xl border border-gray/10 shadow-sm text-left gap-2">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary text-base">
              <MdOutlineAnalytics />
            </div>
            <h3 className="text-xs font-bold text-dark">Check Analytics</h3>
            <p className="text-[11px] text-dark-gray leading-relaxed">
              Track your active links and traffic sources in real-time.
            </p>
          </div>
          <div className="flex flex-col items-start p-4 bg-white rounded-2xl border border-gray/10 shadow-sm text-left gap-2">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary text-base">
              <IoLinkOutline />
            </div>
            <h3 className="text-xs font-bold text-dark">New ShortLink</h3>
            <p className="text-[11px] text-dark-gray leading-relaxed">
              Create a brand new architected URL in seconds.
            </p>
          </div>
          <div className="flex flex-col items-start p-4 bg-white rounded-2xl border border-gray/10 shadow-sm text-left gap-2">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary text-base">
              <MdCode />
            </div>
            <h3 className="text-xs font-bold text-dark">Developer API</h3>
            <p className="text-[11px] text-dark-gray leading-relaxed">
              Integrate our link infrastructure into your apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;