import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperience from "@/components/WorkExperience";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkExperience />
      <ContactSection />
    </div>
  );
};

export default Index;
