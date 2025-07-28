import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("XR/VR");

  const categories = ["XR/VR", "Software Engineering", "Game Design"];

  // Sample project data - replace with your actual projects
  const projects = {
    "XR/VR": [
      {
        id: 1,
        title: "VR Museum Experience",
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
        techStack: ["Unity", "C#", "OpenXR", "Oculus SDK"],
        summary: "Immersive virtual museum allowing users to explore historical artifacts in VR with interactive storytelling elements.",
        githubUrl: "https://github.com/yourusername/vr-museum"
      },
      {
        id: 2,
        title: "AR Shopping Assistant",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        techStack: ["ARCore", "Unity", "C#", "ML Kit"],
        summary: "Mobile AR app that helps users visualize furniture in their space before purchasing.",
        githubUrl: "https://github.com/yourusername/ar-shopping"
      },
      {
        id: 3,
        title: "Mixed Reality Workspace",
        image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
        techStack: ["HoloLens", "MRTK", "Unity", "Azure"],
        summary: "Professional MR application for collaborative 3D design and remote teamwork.",
        githubUrl: "https://github.com/yourusername/mr-workspace"
      }
    ],
    "Software Engineering": [
      {
        id: 4,
        title: "Real-time Chat Platform",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
        summary: "Scalable chat application with real-time messaging, file sharing, and video calls.",
        githubUrl: "https://github.com/yourusername/chat-platform"
      },
      {
        id: 5,
        title: "AI Code Assistant",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        techStack: ["Python", "OpenAI API", "FastAPI", "React"],
        summary: "VS Code extension that provides intelligent code suggestions and documentation generation.",
        githubUrl: "https://github.com/yourusername/ai-assistant"
      },
      {
        id: 6,
        title: "Cloud Infrastructure Manager",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        techStack: ["AWS", "Terraform", "Docker", "Kubernetes"],
        summary: "Automated deployment and monitoring system for microservices architecture.",
        githubUrl: "https://github.com/yourusername/cloud-manager"
      }
    ],
    "Game Design": [
      {
        id: 7,
        title: "Puzzle Adventure Game",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
        techStack: ["Unity", "C#", "Blender", "Photon"],
        summary: "3D puzzle-adventure game with physics-based mechanics and multiplayer co-op mode.",
        githubUrl: "https://github.com/yourusername/puzzle-game"
      },
      {
        id: 8,
        title: "2D Platformer Engine",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
        techStack: ["C++", "OpenGL", "Box2D", "FMOD"],
        summary: "Custom 2D game engine built from scratch with physics, audio, and scripting systems.",
        githubUrl: "https://github.com/yourusername/2d-engine"
      },
      {
        id: 9,
        title: "Strategy Card Game",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
        techStack: ["Unity", "C#", "Mirror", "Firebase"],
        summary: "Turn-based strategy card game with deck building mechanics and online multiplayer.",
        githubUrl: "https://github.com/yourusername/card-game"
      }
    ]
  };

  const currentProjects = projects[activeCategory as keyof typeof projects];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary leading-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of immersive experiences, software solutions, and interactive games
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-3 font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? "btn-hero scale-105" 
                  : "btn-hero-secondary hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div 
              key={project.id} 
              className="card-tech p-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-glow transition-colors group/link"
                >
                  <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform" />
                  <span className="font-medium">View Code</span>
                  <ExternalLink className="h-3 w-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
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