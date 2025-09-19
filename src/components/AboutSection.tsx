import { Github, Linkedin, Trophy, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

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
      <section id="about" className="py-20 px-4 mb-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-12">

            {/* Profile Picture */}
            <div
                ref={profileRef}
                className={`card-tech p-4 w-64 h-64 flex items-center justify-center transition-opacity duration-1000 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {/* Profile Image */}
              <img
                  src="/assets/linkedinprofile.jpg"
                  alt="Felix Jarquin"
                  className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Social Links - Horizontal */}
            <div className="flex gap-6">
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

            {/* About Me */}
            <div className="relative w-full max-w-4xl">
              <div className="card-tech p-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">About Me</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate Computer Science graduate with a strong passion for XR, VR, and immersive technologies.
                    </p>
                    <p>
                      What motivates me is being able to experiment and research new ways to interact with technology,
                      always pushing toward creating something genuinely unique.
                      I've worked as a software engineer and STEM tutor, and have received professional training in developing polished,
                      MVP ready XR and VR demos.
                    </p>
                    <p>
                      I'm actively involved in the tech community through hackathons and computer science organizations like INIT FIU,
                      where I collaborate with other developers on innovative projects through the INIT Build program.
                      I thrive in research and development environments where we can push boundaries and explore what's next in spatial computing.
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["XR/VR", "Unity", "Unreal Engine", "C#", "C++", "Swift", "Python", "JavaScript", "Machine Learning", "Stable Diffusion","Web Development"].map((tech) => (
                          <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                      ))}
                    </div>
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