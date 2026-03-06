const Bio = () => {
  const skillInternRsup = ["Laravel", "Javascript", "Bootstrap 5", "MySQL"];

  const timeline = [
    {
      year: "2004",
      description: (
        <>Born in <span className="text-blue-400 font-bold">Palembang, Indonesia</span></>
      )
    },
    {
      year: "2018-2021",
      description: (
        <>Graduate from <span className="text-blue-400 font-bold">YPI Tunas Bangsa Palembang Highschool</span>, with a major in <span className="text-blue-400 font-bold">social sciences</span></>
      )
    },
    {
      year: "2021–2025",
      duration: "(3.5 years)",
      description: (
        <>Graduate with a bachelor degree in <span className="text-blue-400 font-bold">Information Systems</span> from <span className="text-blue-400 font-bold">University Multi Data Palembang</span></>
      )
    },
    {
      year: "2024, Feb - Juni",
      description: (
        <>Internship at <span className="text-blue-400 font-bold">RSUP dr. Mohammad Hoesin Palembang</span> as a <span className="text-blue-400 font-bold">Full Stack developer</span></>
      ),
      skills: skillInternRsup
    }
  ];

  return (
    <div className="text-white animate-[slideUp_0.6s_ease-out_0.2s_backwards]">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
          Bio
        </h3>
        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mt-2 rounded-full"></div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {timeline.map((item, index) => (
          <div 
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[200px_1fr] gap-3 sm:gap-4 group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300"
          >
            <div className="text-blue-400 font-medium text-sm sm:text-base">
              {item.year}
              {item.duration && (
                <span className="text-white/50 text-sm ml-2">{item.duration}</span>
              )}
            </div>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-white/90 leading-relaxed font-semibold text-sm sm:text-base">
                {item.description}
              </p>
              {item.skills && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bio;
