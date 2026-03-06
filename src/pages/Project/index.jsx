import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ProjectDetailDialog from './components/ProjectDetailDialog';
import { projectsData } from '../../const/project/projectData';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const years = Object.keys(projectsData).sort((a, b) => b - a); 

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="container mx-auto my-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-[float_3s_ease-in-out_infinite]">
            <span className="animated-gradient">
              My Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A collection of projects I've worked on over the years, showcasing my journey in software development.
          </p>
        </div>

        <div className="space-y-16">
          {years.map((year, yearIndex) => (
            <div 
              key={year} 
              className="animate-[slideUp_0.6s_ease-out]"
              style={{ animationDelay: `${yearIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    {year}
                  </h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-teal-400/50 to-transparent"></div>
                <span className="text-white/50 text-sm font-medium">
                  {projectsData[year].length} {projectsData[year].length === 1 ? 'Project' : 'Projects'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projectsData[year].map((project, index) => (
                  <div
                    key={index}
                    className="animate-[scaleIn_0.5s_ease-out]"
                    style={{ animationDelay: `${(yearIndex * 0.1) + (index * 0.1)}s` }}
                  >
                    <ProjectCard 
                      project={project} 
                      onClick={() => handleProjectClick(project)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center glass-effect-dark rounded-2xl p-8 animate-[fadeIn_1s_ease-out]">
          <h3 className="text-2xl font-bold text-white mb-3">
            Want to see more?
          </h3>
          <p className="text-white/70 mb-6">
            Check out my GitHub for more projects and contributions
          </p>
          <a
            href="https://github.com/indraw26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full smooth-transition hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            <span>Visit GitHub</span>
          </a>
        </div>
      </div>

      <ProjectDetailDialog 
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default Project;
