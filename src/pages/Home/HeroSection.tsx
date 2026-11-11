import { useState, type SyntheticEvent } from "react";
import { IoLink } from "react-icons/io5";
import { Link } from "react-router";

const HeroSection = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-blue-50/50">
      <div className="section-container py-16 flex flex-col items-center justify-center text-center min-h-dvh">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight max-w-3xl">
          Shorten URLs. <span className="text-primary">Share Easily.</span>
        </h1>
        <p className="text-dark-gray text-base md:text-lg max-w-2xl mt-4">
          Create short, memorable links for your team communications. Transform
          long, cumbersome URLs into powerful digital assets that drive
          engagement.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <Link
            to="/auth/login"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all shadow-md"
          >
            Get Started
          </Link>
          <Link
            to="#features"
            className="bg-gray/10 text-primary px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-all shadow-sm"
          >
            Learn More
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-3 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-3 mt-12 border border-gray/10"
        >
          <div className="flex items-center gap-3 px-3 py-2 grow w-full">
            <IoLink className="text-dark-gray/40 text-lg font-bold" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://very-long-architectural-url.com/asset-id-99238-x1"
              className="w-full text-dark placeholder:text-dark-gray/40 focus:outline-none text-sm md:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all shadow-sm cursor-pointer"
          >
            Shorten
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;