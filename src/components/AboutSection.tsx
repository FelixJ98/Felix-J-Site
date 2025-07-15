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
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
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

          {/* Center: Profile Picture with Sliding Rectangles */}
          <div className="relative h-80 lg:h-96">
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
              className="relative z-10 h-full flex items-center justify-center transition-all duration-1000 ease-out"
              style={{
                opacity: slideProgress,
                transform: `scale(${0.8 + (slideProgress * 0.2)})`
              }}
            >
              <div className="card-tech p-8 text-center space-y-4">
                {/* Profile placeholder - you can replace with actual image */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  CS
                </div>
                <h3 className="text-xl font-bold text-foreground">Computer Science Student</h3>
                <p className="text-muted-foreground text-sm">
                  XR Developer & Tech Enthusiast
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="tech-badge text-xs">Unity</span>
                  <span className="tech-badge text-xs">React</span>
                  <span className="tech-badge text-xs">XR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center lg:text-left">
              Connect With Me
            </h2>
            
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-tech p-6 block group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <social.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;