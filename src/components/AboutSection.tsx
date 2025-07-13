import { Github, Linkedin, Trophy } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="card-tech p-6">
                <div className="relative w-64 h-64 mx-auto">
                  <img 
                    src={profilePicture} 
                    alt="Profile picture" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/30 rounded-full blur-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/30 rounded-full blur-md"></div>
            </div>
          </div>

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