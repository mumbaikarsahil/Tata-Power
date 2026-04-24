import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cityNight from "@/assets/city-night.jpg";

const milestones = [
  {
    year: "2024",
    title: "Corporate Milestones",
    description:
      "Tata Power Renewable Energy Limited achieved a significant milestone by signing two MoUs with the Government of Tamil Nadu. The first MoU outlines plans to develop 10,000 MW of Renewable Energy Power Projects, creating potential investments of Rs 70,000 crores, generating 3,000 green jobs.",
  },
  {
    year: "2023",
    title: "Mobile App Launch",
    description:
      "TP Renewable Microgrid Limited unveiled its groundbreaking consumer mobile app for rural customers, enabling seamless access to clean energy solutions and digital payments.",
  },
  {
    year: "2022",
    title: "Skilled Workforce Partnership",
    description:
      "Signed MoU to enable local youth and women through skilling in multiple domain areas, strengthening community development and sustainable employment opportunities.",
  },
];

const AchievementsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? milestones.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === milestones.length - 1 ? 0 : c + 1));

  const milestone = milestones[current];

  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={cityNight}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20">
        {/* Left: Title */}
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-primary-foreground uppercase mb-4">
            Our Achievements
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-primary-foreground/80 max-w-md text-sm lg:text-base leading-relaxed">
            34 years and counting: The Tata Power Solar journey at a glance, a
            history rich with experience and achievements.
          </p>
        </div>

        {/* Right: Card */}
        <div className="bg-card rounded-lg shadow-xl p-8 lg:p-10 relative">
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-r" />

          <span className="font-heading font-bold text-3xl lg:text-4xl text-primary block mb-4">
            {milestone.year}
          </span>

          <h3 className="font-heading font-bold text-lg text-foreground mb-3">
            {milestone.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {milestone.description}
          </p>

          <div className="flex items-center justify-between">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm px-6 py-2.5 rounded transition-colors">
              Know more
            </button>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-border rounded flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-border rounded flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
