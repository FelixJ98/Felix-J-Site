import { Github, ExternalLink } from "lucide-react";
import { useRef } from "react";
import RETXTRExample from "@/assets/RETXTRExample.gif";
import CozyDeskTestGif from "@/assets/CozyDeskTestGif.gif";
import GreenifyMeGifTest from "@/assets/GreenifyMeGifTest.gif";
import CatraxGifTest from "@/assets/CatraxGifTest.gif";
import PawsUpXRGif from "@/assets/PawsUpXRGif.gif";
import EsperantoXRGIF from "@/assets/EsperantoXRGIF.gif";
import frightLightProject from "@/assets/fright-light-project.jpg";

const ProjectsSection = () => {
  const mediaRefs = useRef<{ [key: number]: HTMLImageElement }>({});
  
  // Function to handle hover - restart GIF animation
  const handleMouseEnter = (projectId: number) => {
    const imgElement = mediaRefs.current[projectId];
    if (imgElement && imgElement.src.includes('.gif')) {
      const originalSrc = imgElement.src;
      imgElement.src = '';
      setTimeout(() => {
        imgElement.src = originalSrc;
      }, 10);
    }
  };

  // All projects in a single array
  const projects = [
    {
      id: 1,
      title: "Re-TXR",
      staticImage: RETXTRExample,
      gifImage: RETXTRExample,
      useHoverGif: false,
      techStack: ["AI SD", "XR", "Unity", "C#", "Meta SDK"],
      summary: "Mixed Reality app that would let you experiment new textures in realtime, use voice prompt to generate a new texture using stable diffusion",
      githubUrl: "https://github.com/yourusername/vr-museum"
    },
    {
      id: 2,
      title: "Cozy Desk XR",
      staticImage: CozyDeskTestGif,
      gifImage: CozyDeskTestGif,
      useHoverGif: false,
      techStack: ["XR", "Unity", "C#", "Meta MRUK"],
      summary: "An XR productivity app where sustained focus cultivates an evolving mixed reality village while you craft your perfect cozy workspace environment.",
      githubUrl: "https://github.com/yourusername/ar-shopping"
    },
    {
      id: 3,
      title: "GreenifyMe",
      staticImage: GreenifyMeGifTest,
      gifImage: GreenifyMeGifTest,
      useHoverGif: false,
      techStack: ["Python","Flask", "AI SD", "ML", "React"],
      summary: "Second Place AI Hackathon Winner! Image-to-image generative AI to showcase ways to add greenery in user environments, with a Flask extension for climate data visualization and urban heat reduction planning.",
      githubUrl: "https://github.com/yourusername/ai-assistant"
    },
    {
      id: 4,
      title: "CatTrax",
      staticImage: CatraxGifTest,
      gifImage: CatraxGifTest,
      useHoverGif: false,
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      summary: "A VR game featuring top-down train control where players strategically manipulate track switches, clear path obstacles, and interact with dynamic railway elements to guide their cat conductor safely through challenging terrain and hazardous routes.",
      githubUrl: "https://github.com/yourusername/chat-platform"
    },
    {
      id: 5,
      title: "Paws Up! XR",
      staticImage: PawsUpXRGif,
      gifImage: PawsUpXRGif,
      useHoverGif: false,
      techStack: ["HoloLens", "MRTK", "Unity", "Azure"],
      summary: "Take a virtual tour of FIU campus by stepping inside an XR diorama map, transporting yourself inside and get a 360 view of campus buildings and landmarks.",
      githubUrl: "https://github.com/yourusername/mr-workspace"
    },
    {
      id: 6,
      title: "Fright Light",
      staticImage: frightLightProject,
      gifImage: null,
      useHoverGif: false,
      techStack: ["Unreal 4", "Blender"],
      summary: "VR asymmetrical multiplayer Party Game using Unreal engine with one main VR player playing against 4 other players on via PC couch co-op",
      githubUrl: "https://github.com/yourusername/cloud-manager"
    },
    {
      id: 7,
      title: "Esperanto XR",
      staticImage: EsperantoXRGIF,
      gifImage: EsperantoXRGIF,
      useHoverGif: false,
      techStack: ["Unity", "C#", "Blender", "Normcore"],
      summary: "MIT Reality Hacks project a social VR language translation app where users can read real time captions, and have them translated live underneath other users in mixed reality.",
      githubUrl: "https://github.com/yourusername/puzzle-game"
    },
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
            My portfolio of mixed reality, software development, and game design projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-tech p-6 group hover:scale-105 transition-all duration-300 ${
                index === projects.length - 1 ? 'lg:col-start-2' : ''
              }`}
            >
              {/* Project Image with Hover GIF */}
              <div 
                className="relative overflow-hidden rounded-lg mb-4 h-48"
                onMouseEnter={() => handleMouseEnter(project.id)}
              >
                <img
                  ref={(el) => {
                    if (el) mediaRefs.current[project.id] = el;
                  }}
                  src={project.gifImage || project.staticImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none"></div>
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