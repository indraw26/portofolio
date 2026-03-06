import { timelineData } from '../../../const/about/aboutData';

const Bio = () => {
  return (
    <div className="text-white animate-[slideUp_0.6s_ease-out_0.2s_backwards]">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
          Bio
        </h3>
        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mt-2 rounded-full"></div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {timelineData.map((item, index) => (
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
