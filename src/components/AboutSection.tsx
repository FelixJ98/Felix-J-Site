import { Github, Linkedin, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if about section is in view
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        const rect = aboutElement.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slideProgress = Math.min(Math.max((scrollY - 300) / 400, 0), 1);
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      description: "Code repositories"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      description: "Professional network"
    },
    {
      name: "Devpost",
      icon: Trophy,
      url: "https://devpost.com/yourusername", 
      description: "Hackathon projects"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          
          {/* Left: About Me Cube */}
          <div className="relative">
            <div className="card-tech p-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">About Me</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Computer Science student specializing in Extended Reality (XR) 
                    and immersive technologies. My journey spans across VR/AR development, 
                    software engineering, and game design.
                  </p>
                  <p>
                    With hands-on experience in Unity, Unreal Engine, and cutting-edge XR frameworks, 
                    I love creating digital experiences that blur the line between reality and imagination.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring the latest in spatial computing, 
                    participating in hackathons, or collaborating on open-source projects.
                  </p>
                </div>
                
                {/* Skills */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Unity", "Unreal Engine", "C#", "C++", "React", "TypeScript", "OpenXR"].map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Profile Picture Square with Sliding Rectangles */}
          <div className="relative aspect-square max-w-[600px] mx-auto">
            {/* Background sliding rectangles */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* Top sliding rectangle */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm transition-all duration-1000 ease-out"
                style={{
                  transform: `translateY(${-100 + (slideProgress * 100)}%)`,
                  opacity: isVisible ? 1 : 0
                }}
              />
              
              {/* Bottom sliding rectangle */}
              <div 
                className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-accent/5 backdrop-blur-sm transition-all duration-1000 ease-out"
                style={{
                  transform: `translateY(${100 - (slideProgress * 100)}%)`,
                  opacity: isVisible ? 1 : 0
                }}
              />
            </div>

            {/* Profile content that reveals */}
            <div 
              className="relative z-10 h-full flex flex-col items-center justify-center transition-all duration-1000 ease-out"
              style={{
                opacity: slideProgress,
                transform: `scale(${0.8 + (slideProgress * 0.2)})`
              }}
            >
              <div className="card-tech p-8 w-full h-full flex flex-col justify-between">
                {/* Profile Image */}
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="w-48 h-48 rounded-lg object-cover"
                  />
                </div>

                {/* Social Links as Icon Buttons */}
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/20 hover:bg-primary/30 p-3 rounded-lg transition-all duration-300 hover:scale-110 group"
                      title={social.description}
                    >
                      <social.icon className="h-5 w-5 text-primary group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;