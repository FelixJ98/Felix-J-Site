import { Github, ExternalLink } from "lucide-react";
import cubonetestgif from "@/assets/cubonetestgif.gif";

const ProjectsSection = () => {
  // All projects in a single array
  const projects = [
    {
      id: 1,
      title: "VR Museum Experience",
      image: "/src/assets/cubonetestgif.gif",
      techStack: ["Unity", "C#", "OpenXR", "Oculus SDK"],
      summary: "Immersive virtual museum allowing users to explore historical artifacts in VR with interactive storytelling elements.",
      githubUrl: "https://github.com/yourusername/vr-museum"
    },
    {
      id: 2,
      title: "AR Shopping Assistant",
      image: "/src/assets/ar-shopping-project.jpg",
      techStack: ["ARCore", "Unity", "C#", "ML Kit"],
      summary: "Mobile AR app that helps users visualize furniture in their space before purchasing.",
      githubUrl: "https://github.com/yourusername/ar-shopping"
    },
    {
      id: 3,
      title: "Mixed Reality Workspace",
      image: "/src/assets/mr-workspace-project.jpg",
      techStack: ["HoloLens", "MRTK", "Unity", "Azure"],
      summary: "Professional MR application for collaborative 3D design and remote teamwork.",
      githubUrl: "https://github.com/yourusername/mr-workspace"
    },
    {
      id: 4,
      title: "Real-time Chat Platform",
      image: "/src/assets/chat-platform-project.jpg",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      summary: "Scalable chat application with real-time messaging, file sharing, and video calls.",
      githubUrl: "https://github.com/yourusername/chat-platform"
    },
    {
      id: 5,
      title: "AI Code Assistant",
      image: "/src/assets/ai-assistant-project.jpg",
      techStack: ["Python", "OpenAI API", "FastAPI", "React"],
      summary: "VS Code extension that provides intelligent code suggestions and documentation generation.",
      githubUrl: "https://github.com/yourusername/ai-assistant"
    },
    {
      id: 6,
      title: "Cloud Infrastructure Manager",
      image: "/src/assets/cloud-manager-project.jpg",
      techStack: ["AWS", "Terraform", "Docker", "Kubernetes"],
      summary: "Automated deployment and monitoring system for microservices architecture.",
      githubUrl: "https://github.com/yourusername/cloud-manager"
    },
    {
      id: 7,
      title: "Puzzle Adventure Game",
      image: "/src/assets/puzzle-game-project.jpg",
      techStack: ["Unity", "C#", "Blender", "Photon"],
      summary: "3D puzzle-adventure game with physics-based mechanics and multiplayer co-op mode.",
      githubUrl: "https://github.com/yourusername/puzzle-game"
    },
    {
      id: 8,
      title: "2D Platformer Engine",
      image: "/src/assets/platformer-engine-project.jpg",
      techStack: ["C++", "OpenGL", "Box2D", "FMOD"],
      summary: "Custom 2D game engine built from scratch with physics, audio, and scripting systems.",
      githubUrl: "https://github.com/yourusername/2d-engine"
    },
    {
      id: 9,
      title: "Strategy Card Game",
      image: "/src/assets/card-game-project.jpg",
      techStack: ["Unity", "C#", "Mirror", "Firebase"],
      summary: "Turn-based strategy card game with deck building mechanics and online multiplayer.",
      githubUrl: "https://github.com/yourusername/card-game"
    }
  ];

  return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 leading-relaxed bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto -mt-5">
              My portfolio of mixed reality, software design, and game design projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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