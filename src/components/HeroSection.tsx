import { useState, useEffect } from "react";
import { ArrowRight, Zap, Factory, Sun, Globe, Home } from "lucide-react";
import heroSolar from "@/assets/hero-solar.jpg";
import solarRooftop from "@/assets/solar-rooftop.jpg";

const slides = [
  {
    image: heroSolar,
    title: "BATTERY ENERGY STORAGE SYSTEMS",
    subtitle: "Powering the Country",
    icon: Zap,
  },
  {
    image: solarRooftop,
    title: "ROOFTOP SOLAR SOLUTIONS",
    subtitle: "#1 Rooftop Player",
    icon: Home,
  },
];

const sideLabels = [
  { icon: Zap, label: "Powering the\nCountry" },
  { icon: Factory, label: "Manufacturing\nExcellence" },
  { icon: Sun, label: "#Dependable\nAsTheSun" },
  { icon: Globe, label: "Envisaging a\nGreener Tomorrow" },
  { icon: Home, label: "#1 Rooftop\nPlayer" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="overlay-dark" />
      <div className="overlay-bottom" />

      {/* Side navigation labels */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-row gap-6">
        {sideLabels.map((item, i) => {
          const Icon = item.icon;
          const isActive = current === (i % slides.length);
          return (
            <button
              key={i}
              className={`group relative flex items-center gap-3 p-3 rounded-lg transition-all duration-500 transform hover:scale-105 ${isActive ? 'bg-gradient-to-r from-accent/30 to-accent/20 backdrop-blur-md border border-accent/50 shadow-2xl shadow-accent/20' : 'hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/30 hover:shadow-lg'}`}
              onClick={() => setCurrent(i % slides.length)}
            >
              {/* Animated background glow */}
              {isActive && (
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl animate-pulse"></div>
              )}

              <div className={`relative p-3 rounded-full transition-all duration-500 ${
                isActive
                  ? 'bg-accent text-white shadow-lg shadow-accent/50 rotate-12'
                  : 'bg-white/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:rotate-12'
              }`}>
                <Icon className="w-5 h-5" />
                {/* Pulse effect for active */}
                {isActive && (
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30"></div>
                )}
              </div>

              <div className="flex flex-col relative z-10">
                <span className={`text-sm font-heading font-bold transition-all duration-300 whitespace-pre-line leading-tight ${
                  isActive
                    ? 'text-white drop-shadow-lg'
                    : 'text-primary-foreground/90 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-6 h-0.5 bg-accent rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                  </div>
                )}
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 rounded-full overflow-hidden">
                <div className={`h-full bg-accent transition-all duration-1000 ${
                  isActive ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 animate-fade-in-up">
          <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-7xl text-primary-foreground tracking-wider mb-6 drop-shadow-lg">
            {slides[current].title}
          </h1>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-accent font-heading font-medium text-sm tracking-widest hover:gap-4 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
            KNOW MORE
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              current === i ? "w-10 bg-accent" : "w-4 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
