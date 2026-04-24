import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CTASection from "@/components/CTASection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HeritageSection />
      <StatsSection />
      <ProjectsSection />
      <AchievementsSection />
      <CTASection />
      <EnquirySection />
      <Footer />
    </div>
  );
};

export default Index;
