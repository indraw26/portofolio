import { ExternalLink } from 'lucide-react';

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

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech_stack.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="text-[10px] font-medium px-2 py-1 rounded bg-white/5 text-white/70 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 3 && (
            <span className="text-[10px] font-medium px-2 py-1 rounded bg-white/5 text-white/50 border border-white/10">
              +{project.tech_stack.length - 3}
            </span>
          )}
        </div>

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

export default ProjectCard;
