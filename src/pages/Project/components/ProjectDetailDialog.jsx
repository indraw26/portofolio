import { ExternalLink, Github } from 'lucide-react';
import Dialog from '../../../common/Dialog/Dialog';

const ProjectDetailDialog = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={project.name}>
      <div className="space-y-6">
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
          <img 
            src={project.image_url} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent"></div>
        </div>

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

        <div>
          <h3 className="text-lg font-bold text-white mb-3">About the Project</h3>
          <p className="text-white/80 leading-relaxed">
            {project.full_description}
          </p>
        </div>

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

export default ProjectDetailDialog;
