import { Calculator, MessageSquare, Trophy } from "lucide-react";
import solarLandscape from "@/assets/solar-landscape.jpg";

const actions = [
  {
    icon: Calculator,
    title: "Solar Calculator",
    description: "Calculate your energy savings",
  },
  {
    icon: MessageSquare,
    title: "Quick Enquiry",
    description: "Click here to reach out to us",
  },
  {
    icon: Trophy,
    title: "Awards & Recognition",
    description: "Our accomplishments at a glance",
  },
];

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <img
        src={solarLandscape}
        alt="Solar panels"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="overlay-dark" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.title}
                href="#"
                className="group flex items-center gap-5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-accent/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-solar flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-primary-foreground">{action.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{action.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
