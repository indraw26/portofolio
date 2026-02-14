import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import Dialog from '../common/Dialog/Dialog';

const projectsData = {
  2025: [
    {
      name: "Spacepro",
      short_description: "An variant of rent room application & ordering food and beverages.",
      full_description: "Spacepro is a comprehensive platform that combines room rental management with food and beverage ordering services. The application streamlines the process of finding and booking accommodations while providing integrated access to local dining options. Built with modern web technologies, it offers a seamless user experience for both property managers and tenants. The platform features real-time availability tracking, secure payment processing, and an intuitive interface for browsing and ordering from nearby restaurants and cafes.",
      tech_stack: ["React", "Tailwind CSS", "TypeScript", "REST API", "Responsive Design"],
      image_url: "/images/project/spacepro.png",
      href_link: "https://spacepro.id",
      github_status: "0",
      job: "Frontend Developer"
    },
    {
      name: "Inventory Warehouse Dashboard",
      short_description: "Monitoring requirements and managing stock delivery requirements each project.",
      full_description: "A powerful inventory management system designed for warehouse operations and project-based stock tracking. This dashboard provides real-time visibility into inventory levels, delivery schedules, and project requirements. The system enables efficient stock allocation across multiple projects, automated reorder notifications, and comprehensive reporting capabilities. With advanced filtering and search functionality, warehouse managers can quickly locate items, track shipments, and ensure timely delivery to project sites. The dashboard includes analytics for inventory turnover, cost tracking, and demand forecasting.",
      tech_stack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Material-UI"],
      image_url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
      href_link: "https://example.com/blockchain-voting",
      github_status: "0",
      job: "Fullstack Developer"
    }
  ],
  // 2023: [
  //   {
  //     name: "Real-time Chat Application",
  //     short_description: "Scalable chat platform with WebSocket support, end-to-end encryption, and multimedia sharing capabilities.",
  //     image_url: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&auto=format&fit=crop",
  //     href_link: "https://example.com/chat-app",
  //     github_status: "1",
  //     job: "Backend Developer"
  //   },
  //   {
  //     name: "E-Commerce Dashboard",
  //     short_description: "Comprehensive admin dashboard for managing products, orders, and analytics with beautiful data visualizations.",
  //     image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  //     href_link: "https://example.com/ecommerce-dashboard",
  //     github_status: "0",
  //     job: "Frontend Developer"
  //   }
  // ],
  // 2022: [
  //   {
  //     name: "Weather Forecast App",
  //     short_description: "Beautiful weather application with real-time forecasts, interactive maps, and personalized weather alerts.",
  //     image_url: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
  //     href_link: "https://example.com/weather-app",
  //     github_status: "1",
  //     job: "Mobile Developer"
  //   },
  //   {
  //     name: "Task Management System",
  //     short_description: "Collaborative project management tool with Kanban boards, time tracking, and team collaboration features.",
  //     image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
  //     href_link: "https://example.com/task-manager",
  //     github_status: "1",
  //     job: "Full Stack Developer"
  //   }
  // ],
};

const ProjectDetailDialog = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={project.name}>
      <div className="space-y-6">
        {/* Project Image */}
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
          <img 
            src={project.image_url} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent"></div>
        </div>

        {/* Job Role Badge */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-400/20 text-blue-400 border border-blue-500/30">
            {project.job}
          </span>
          {project.github_status === "1" && (
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-400/20 text-purple-400 border border-purple-500/30">
              Open Source
            </span>
          )}
        </div>

        {/* Full Description */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">About the Project</h3>
          <p className="text-white/80 leading-relaxed">
            {project.full_description}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-400/10 text-white border border-white/10 hover:border-blue-500/50 smooth-transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
          <a 
            href={project.href_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full smooth-transition hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            <span>View Live Project</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          {project.github_status === "1" && (
            <a 
              href={project.github_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3 glass-effect border border-white/20 text-white font-semibold rounded-full smooth-transition hover:border-white/40 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </Dialog>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative glass-effect-dark rounded-2xl overflow-hidden smooth-transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image_url} 
          alt={project.name}
          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent"></div>
        
        {project.github_status === "1" && (
          <div className="absolute top-4 right-4 glass-effect px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-xs text-white font-medium">Open Source</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="inline-block mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-400/20 text-blue-400 border border-blue-500/30">
            {project.job}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400 smooth-transition">
          {project.name}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.short_description}
        </p>

        <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white smooth-transition">
          <span>View Details</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-400/5"></div>
      </div>
    </div>
  );
};

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

