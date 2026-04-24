import solarLandscape from "@/assets/solar-landscape.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import solarRooftop from "@/assets/solar-rooftop.jpg";

const projects = [
  {
    image: heroSolar,
    title: "450 MWp Solar Project in Bikaner, Rajasthan",
    description: "Generate sustainable and renewable power in the Bikaner region of Rajasthan.",
    size: "450 MWp",
  },
  {
    image: solarRooftop,
    title: "120 kW Vertical Solar Power Farm – Dell",
    description: "First of its kind installation with custom vertical load bearing structure.",
    size: "120 kW",
  },
  {
    image: solarLandscape,
    title: "10.8 MW Rooftop Solar Power System – ANERT, Kerala",
    description: "Selected to install 7700+ rooftop solar power systems across Kerala.",
    size: "10.8 MW",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gradient-solar text-accent-foreground font-heading font-bold text-xs px-3 py-1.5 rounded-sm">
                  {project.size}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="text-accent font-heading font-semibold text-sm tracking-wide hover:underline"
                >
                  KNOW MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
