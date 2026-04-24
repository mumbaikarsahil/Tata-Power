import solarManufacturing from "@/assets/solar-manufacturing.jpg";

const HeritageSection = () => {
  return (
    <section id="about" className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src={solarManufacturing}
              alt="Tata Power Solar Manufacturing"
              className="w-full h-80 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-4 block">
              Our Heritage
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 leading-tight">
              Tata Group
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Tata group is a global enterprise, headquartered in India, comprising over 100 independent operating companies and operating in more than 100 countries across six continents.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Tata Power is the country's largest integrated power utility and our solutions are powering change in some of the biggest cities in the world.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-solar text-accent-foreground font-heading font-semibold px-8 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
