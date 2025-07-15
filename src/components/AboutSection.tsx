import { Github, Linkedin, Trophy, User } from "lucide-react";

const AboutSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/FelixJ98",
      description: "Code repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/felixjarquin",
      description: "Professional network"
    },
    {
      name: "Devpost",
      icon: Trophy,
      url: "https://devpost.com/fjwolfe?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      description: "Hackathon projects"
    }
  ];

  return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

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

            {/* Right: Profile and Social Links */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center lg:text-left">
                Connect With Me
              </h2>

              {/* Profile Square and Social Links Side by Side */}
              <div className="flex items-center gap-6">
                <div className="card-tech p-4 w-56 h-56 flex items-center justify-center">
                  {/* Profile Image - replace with your actual image */}
                  {/* <img
                  src="/src/assets/your-profile-image.jpg"
                  alt="Felix Jarquin"
                  className="w-full h-full object-cover rounded-lg"
                /> */}

                  {/* Placeholder - remove this when you add your image */}
                  <div className="w-full h-full bg-primary/20 rounded-lg flex items-center justify-center">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                </div>

                {/* Social Links - Larger and to the right */}
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                      <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-tech p-4 w-56 block group hover:scale-105 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                            <social.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                              {social.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
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
        </div>
      </section>
  );
};

export default AboutSection;