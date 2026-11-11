import { featureList } from "../../constants/featureList";

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full bg-gray/30">
      <div className="section-container py-20 flex flex-col gap-12">
        <div className="text-left max-w-2xl flex flex-col gap-4">
          <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase py-1">
            Architectural Features
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Built for Enterprise Precision
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-xl border border-gray/10 flex flex-col items-start text-left hover:opacity-90 transition-all duration-300 hover:-translate-y-1 gap-6"
              >
                <div className={`p-4 rounded-xl ${feature.iconBg} shadow-sm`}>
                  <Icon className={`text-xl ${feature.iconColor}`} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-dark">{feature.title}</h3>
                  <p className="text-dark-gray text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`w-12 py-[3px] rounded-full ${feature.barColor}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;