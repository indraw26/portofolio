const Bio = () => {
  const skillInternRsup = ["Laravel", "Javascript", "Bootstrap 5", "MySQL"];

  const timeline = [
    {
      year: "2004",
      description: (
        <>Born in <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent font-bold">Palembang, Indonesia</span></>
      )
    },
    {
      year: "2018-2021",
      description: (
        <>Graduate from <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent font-bold">YPI Tunas Bangsa Palembang Highschool</span>, with a major in <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent font-bold">social sciences</span></>
      )
    },
    {
      year: "2021–2025",
      duration: "(3.5 years)",
      description: (
        <>Graduate with a bachelor degree in <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent font-bold">Information Systems</span> from <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent font-bold">University Multi Data Palembang</span></>
      )
    },
    {
      year: "2024, Feb - Juni",
      description: (
        <>Internship at <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent font-bold">RSUP dr. Mohammad Hoesin Palembang</span> as a <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent font-bold">Full Stack developer</span></>
      ),
      skills: skillInternRsup
    }
  ];

  return (
    <div className="text-white animate-[slideUp_0.6s_ease-out_0.2s_backwards]">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
          Bio
        </h3>
        <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-purple-500 mt-2 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div 
            key={index}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
          >
            <div className="text-red-400 font-medium">
              {item.year}
              {item.duration && (
                <span className="text-white/50 text-sm ml-2">{item.duration}</span>
              )}
            </div>
            <div className="space-y-3">
              <p className="text-white/90 leading-relaxed font-semibold">
                {item.description}
              </p>
              {item.skills && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-red-400/10 text-red-400 border border-red-400/30"
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
