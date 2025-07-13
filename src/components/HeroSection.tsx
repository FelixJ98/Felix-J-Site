import { ChevronDown, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleResumeDownload = () => {
    // Replace with actual resume URL
    window.open("#", "_blank");
  };

  const handleCalendlyOpen = () => {
    // Replace with actual Calendly URL
    window.open("https://calendly.com/your-username", "_blank");
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Name */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            XR Developer & Software Engineer
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button 
            onClick={handleResumeDownload}
            className="btn-hero group"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          
          <Button 
            onClick={handleCalendlyOpen}
            variant="outline"
            className="btn-hero-secondary group"
            size="lg"
          >
            <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Schedule Coffee Chat
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="scroll-indicator p-2 rounded-full hover:bg-primary/20 transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;