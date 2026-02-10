import { ExternalLink } from 'lucide-react';

const projectsData = {
  2024: [
    {
      name: "AI Portfolio Generator",
      description: "An intelligent portfolio builder using GPT-4 to create personalized developer portfolios with modern designs and animations.",
      image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      href_link: "https://example.com/ai-portfolio",
      github_status: "1",
      job: "Full Stack Developer"
    },
    {
      name: "Blockchain Voting System",
      description: "Decentralized voting platform built on Ethereum ensuring transparency and security for democratic processes.",
      image_url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
      href_link: "https://example.com/blockchain-voting",
      github_status: "1",
      job: "Blockchain Developer"
    }
  ],
  2023: [
    {
      name: "Real-time Chat Application",
      description: "Scalable chat platform with WebSocket support, end-to-end encryption, and multimedia sharing capabilities.",
      image_url: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&auto=format&fit=crop",
      href_link: "https://example.com/chat-app",
      github_status: "1",
      job: "Backend Developer"
    },
    {
      name: "E-Commerce Dashboard",
      description: "Comprehensive admin dashboard for managing products, orders, and analytics with beautiful data visualizations.",
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      href_link: "https://example.com/ecommerce-dashboard",
      github_status: "0",
      job: "Frontend Developer"
    }
  ],
  2022: [
    {
      name: "Weather Forecast App",
      description: "Beautiful weather application with real-time forecasts, interactive maps, and personalized weather alerts.",
      image_url: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
      href_link: "https://example.com/weather-app",
      github_status: "1",
      job: "Mobile Developer"
    },
    {
      name: "Task Management System",
      description: "Collaborative project management tool with Kanban boards, time tracking, and team collaboration features.",
      image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      href_link: "https://example.com/task-manager",
      github_status: "1",
      job: "Full Stack Developer"
    }
  ],
  2021: [
    {
      name: "Social Media Analytics",
      description: "Advanced analytics platform for tracking social media performance across multiple platforms with AI insights.",
      image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      href_link: "https://example.com/social-analytics",
      github_status: "0",
      job: "Data Analyst"
    },
    {
      name: "Fitness Tracking App",
      description: "Comprehensive fitness tracker with workout plans, nutrition tracking, and progress visualization.",
      image_url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop",
      href_link: "https://example.com/fitness-tracker",
      github_status: "1",
      job: "Mobile Developer"
    }
  ]
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative glass-effect-dark rounded-2xl overflow-hidden smooth-transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image_url} 
          alt={project.name}
          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent"></div>
        
        {/* GitHub Badge */}
        {project.github_status === "1" && (
          <div className="absolute top-4 right-4 glass-effect px-3 py-1.5 rounded-full flex items-center gap-2">
            {/* <Github className="w-4 h-4 text-white" /> */}
            <span className="text-xs text-white font-medium">Open Source</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Job Tag */}
        <div className="inline-block mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-400/20 text-blue-400 border border-blue-500/30">
            {project.job}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400 smooth-transition">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Action Button */}
        <a 
          href={project.href_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white smooth-transition group/link"
        >
          <span>View Project</span>
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 smooth-transition" />
        </a>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-400/5"></div>
      </div>
    </div>
  );
};

const Project = () => {
  const years = Object.keys(projectsData).sort((a, b) => b - a); // Sort years descending

  return (
    <div className="container mx-auto my-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Projects by Year */}
        <div className="space-y-16">
          {years.map((year, yearIndex) => (
            <div 
              key={year} 
              className="animate-[slideUp_0.6s_ease-out]"
              style={{ animationDelay: `${yearIndex * 0.1}s` }}
            >
              {/* Year Header */}
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

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projectsData[year].map((project, index) => (
                  <div
                    key={index}
                    className="animate-[scaleIn_0.5s_ease-out]"
                    style={{ animationDelay: `${(yearIndex * 0.1) + (index * 0.1)}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center glass-effect-dark rounded-2xl p-8 animate-[fadeIn_1s_ease-out]">
          <h3 className="text-2xl font-bold text-white mb-3">
            Want to see more?
          </h3>
          <p className="text-white/70 mb-6">
            Check out my GitHub for more projects and contributions
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full smooth-transition hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            {/* <Github className="w-5 h-5" /> */}
            <span>Visit GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
