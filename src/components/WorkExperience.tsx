import workExperienceImg from "@/assets/work-experience.jpg";

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Building immersive experiences and scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Experience Summary */}
          <div className="space-y-8">
            
            {/* Current/Recent Position */}
            <div className="card-tech p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">XR Developer Intern</h3>
                    <p className="text-primary font-medium">Tech Innovation Lab</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    2024 - Present
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Developing cutting-edge VR training simulations for enterprise clients. 
                  Implemented haptic feedback systems and optimized rendering pipelines 
                  to achieve 90fps performance across multiple VR platforms.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["Unity", "OpenXR", "Haptic SDK", "Performance Optimization"].map((skill) => (
                    <span key={skill} className="tech-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Previous Position */}
            <div className="card-tech p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Software Engineering Intern</h3>
                    <p className="text-primary font-medium">StartupTech Solutions</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Summer 2023
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Built full-stack web applications using React and Node.js. 
                  Collaborated with cross-functional teams to deliver scalable solutions 
                  serving 10,000+ active users.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "PostgreSQL", "AWS"].map((skill) => (
                    <span key={skill} className="tech-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Key Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">▸</span>
                  Led development of VR training module reducing onboarding time by 40%
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">▸</span>
                  Optimized rendering performance resulting in 60% frame rate improvement
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">▸</span>
                  Mentored 3 junior developers in XR best practices and Unity development
                </li>
              </ul>
            </div>
          </div>

          {/* Work Photos Collage */}
          <div className="relative">
            <div className="card-tech p-4 transform hover:rotate-1 transition-transform duration-300">
              <img 
                src={workExperienceImg} 
                alt="Work experience showcase" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg"></div>
              
              {/* Floating badges */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Team Collaboration", "Innovation", "Problem Solving"].map((badge) => (
                    <span key={badge} className="tech-badge backdrop-blur-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;