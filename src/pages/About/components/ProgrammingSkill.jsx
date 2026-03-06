const Skill = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "Javascript", "React.js", "Vue.js"],
      color: "blue"
    },
    {
      name: "Backend",
      skills: ["PHP", "Laravel", "Python", "Java"],
      color: "teal"
    },
    {
      name: "Mobile",
      skills: ["Flutter", "Dart"],
      color: "cyan"
    },
    {
      name: "Database",
      skills: ["MySQL", "PostgreSQL","MongoDB"],
      color: "sky"
    },
    {
      name: "CSS Frameworks",
      skills: ["Bootstrap", "Tailwind CSS"],
      color: "indigo"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-400/10 text-blue-400 border-blue-400/30",
    teal: "bg-teal-400/10 text-teal-400 border-teal-400/30",
    cyan: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
    sky: "bg-sky-400/10 text-sky-400 border-sky-400/30",
    indigo: "bg-indigo-400/10 text-indigo-400 border-indigo-400/30"
  };

  return (
    <div className="text-white animate-[slideUp_0.6s_ease-out_0.3s_backwards]">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
          Programming Skills
        </h3>
        <div className="w-36 sm:w-44 h-1 bg-teal-400 mt-2 rounded-full"></div>
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-base sm:text-lg font-semibold text-white/80">{category.name}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`
                    px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium
                    border transition-all duration-300
                    hover:scale-105 cursor-default
                    ${colorClasses[category.color]}
                  `}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
