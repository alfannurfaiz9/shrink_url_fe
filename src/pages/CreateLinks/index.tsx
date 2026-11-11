import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineAnalytics, MdQrCode2 } from "react-icons/md";
import CreateLinkForm from "./CreateLinkForm";

const CreateLink = () => {
  return (
    <div className="min-h-dvh py-16 w-full bg-slate-50/90 flex flex-col items-center p-4 gap-8">
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Link
            to="/user/dashboard"
            className="flex items-center gap-2 text-primary text-xs font-semibold hover:opacity-80 w-fit"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex flex-col gap-1 text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-dark">
              Create New Short Link
            </h1>
            <p className="text-dark-gray text-sm">
              Transform your long URLs into clean, manageable assets.
            </p>
          </div>
        </div>
        <div className="w-full bg-white p-8 rounded-2xl shadow-xl border border-gray/10 flex flex-col gap-6">
          <CreateLinkForm />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray/10 shadow-sm text-left">
            <div className="bg-orange-500/10 p-2.5 rounded-lg text-orange-500 text-lg">
              <MdOutlineAnalytics />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xs font-bold text-dark uppercase tracking-wider">
                Real-time Analytics
              </h3>
              <p className="text-[11px] text-dark-gray leading-relaxed">
                Track every click, geographical location, and referral source instantly.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray/10 shadow-sm text-left">
            <div className="bg-indigo-500/10 p-2.5 rounded-lg text-indigo-500 text-lg">
              <MdQrCode2 />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xs font-bold text-dark uppercase tracking-wider">
                Auto-generated QR
              </h3>
              <p className="text-[11px] text-dark-gray leading-relaxed">
                Every link automatically creates a high-resolution QR code for print.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLink;