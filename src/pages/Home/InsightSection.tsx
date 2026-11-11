import { FaCheckCircle } from "react-icons/fa";
import insightImage from "../../assets/insightImage.png";

const InsightsSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="section-container py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={insightImage}
            alt="Dashboard Analytics"
            className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase py-1">
              Data Driven Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
              Observe your link architecture in real-time.
            </h2>
          </div>
          <p className="text-dark-gray text-sm md:text-base leading-relaxed">
            Every click is a data point. Our dashboard provides surgical precision
            into where your traffic originates, who is engaging, and how your team
            communications are performing across the globe.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-primary text-xl shrink-0" />
              <span className="text-dark font-medium text-sm md:text-base">
                Geographic Distribution Maps
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-primary text-xl shrink-0" />
              <span className="text-dark font-medium text-sm md:text-base">
                Device & Browser Breakdown
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-primary text-xl shrink-0" />
              <span className="text-dark font-medium text-sm md:text-base">
                UTM Parameter Tracking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;