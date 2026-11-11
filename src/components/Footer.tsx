import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50/50 py-6 px-4 lg:px-8 border-t border-gray/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs tracking-wider uppercase text-dark-gray/60 font-semibold">
        <span>© 2024 SHRINKURL. THE DIGITAL ARCHITECT.</span>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <Link to="/privacy" className="hover:opacity-70 transition-all">
            PRIVACY POLICY
          </Link>
          <Link to="/terms" className="hover:opacity-70 transition-all">
            TERMS OF SERVICE
          </Link>
          <Link to="/docs" className="hover:opacity-70 transition-all">
            API DOCUMENTATION
          </Link>
          <Link to="/support" className="hover:opacity-70 transition-all">
            SUPPORT
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;