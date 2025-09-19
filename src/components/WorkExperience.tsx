import disneyWork1 from "../../public/assets/WorkPic1.jpg";
import disneyWork2 from "../../public/assets/WorkPic2.jpg";
import tutorWork1 from "../../public/assets/Zero3.png";
import tutorWork2 from "../../public/assets/ZeroLimit2.png";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Walt Disney Studios",
      location: "Burbank, CA",
      duration: "06/2024 – 08/2024",
      description: "Researched object tracking with the Apple Vision Pro using native machine learning models trained in CreateML. Achieved a strong understanding of Swift within three months to develop a fully functional prototype showcasing advanced beta features.",
      achievements: [
        "Delivered high quality presentation with detailed research and key findings to executive stakeholders",
        "Outlined potential for future XR commercial content development",
        "Collaborated within Scrum framework meeting weekly sprint deadlines"
      ],
      skills: ["Swift", "Apple Vision Pro", "Xcode", "CreateML", "Machine Learning", "Blender"],
      images: [disneyWork1, disneyWork2]
    },
    {
      title: "Private STEM Tutor",
      company: "Zero Limit Learning",
      location: "Miami, FL", 
      duration: "06/2023 – 03/2024",
      description: "Managed classroom of +20 Students teaching the basics of coding with Scratch. Worked with Sphero hardware to give students hands-on robotics experience and coded educational experiences in AR spaces.",
      achievements: [
        "Created educational AR experiences through CoSpaces software",
        "Developed 3D models using Maya and transferred fbx files to Tinker CAD",
        "Built company website prototype using HTML, CSS and JavaScript"
      ],
      skills: ["Scratch", "Sphero Robotics", "CoSpaces", "Maya", "HTML/CSS/JS"],
      images: [tutorWork1, tutorWork2]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Work history showcasing growth, skills, and achievements.
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Experience Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="card-tech p-8">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{experience.title}</h3>
                        <p className="text-primary font-medium text-lg">{experience.company}</p>
                        <p className="text-muted-foreground">{experience.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                        {experience.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-muted-foreground">
                            <span className="text-primary mr-2 mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span key={skill} className="tech-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Photos */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {experience.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative overflow-hidden rounded-lg">
                    <div className="card-tech p-4">
                      <img 
                        src={image} 
                        alt={`${experience.company} work environment ${imgIndex + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-lg"></div>
                    </div>
                  </div>
                ))}
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;