const Skill = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "Javascript", "React.js"],
      color: "red"
    },
    {
      name: "Backend",
      skills: ["PHP", "Laravel", "Python", "Java"],
      color: "purple"
    },
    {
      name: "Mobile",
      skills: ["Flutter", "Dart"],
      color: "pink"
    },
    {
      name: "Database",
      skills: ["MySQL", "MongoDB"],
      color: "violet"
    },
    {
      name: "CSS Frameworks",
      skills: ["Bootstrap", "Tailwind CSS"],
      color: "fuchsia"
    }
  ];

  const colorClasses = {
    red: "bg-red-400/10 text-red-400 border-red-400/30",
    purple: "bg-purple-400/10 text-purple-400 border-purple-400/30",
    pink: "bg-pink-400/10 text-pink-400 border-pink-400/30",
    violet: "bg-violet-400/10 text-violet-400 border-violet-400/30",
    fuchsia: "bg-fuchsia-400/10 text-fuchsia-400 border-fuchsia-400/30"
  };

  return (
    <div className="text-white animate-[slideUp_0.6s_ease-out_0.3s_backwards]">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
          Programming Skills
        </h3>
        <div className="w-36 sm:w-44 h-1 bg-purple-400 mt-2 rounded-full"></div>
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
